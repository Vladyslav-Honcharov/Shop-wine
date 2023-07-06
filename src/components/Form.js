import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { PatternFormat } from "react-number-format";
import "./Form.scss";
import { sendCartData } from "../redux/actions";
import {
  saveDataToLocalStorage,
  loadDataFromLocalStorage,
} from "../redux/localStorageActions";
import { useDispatch } from "react-redux";
import Spiner from "./Spiner";
import { useState } from "react";

const BuyForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        age: "",
        address: "",
        phone: "+380",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .min(2, "Must be at least 2 characters long")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .min(3, "Must be at least 3 characters long")
          .required("Required"),
        age: Yup.number()
          .max(100, "Enter the correct age")
          .required("Required"),
        address: Yup.string()
          .max(25, "Must be 25 characters or less")
          .min(5, "Must be at least 5 characters long")
          .required("Required"),
        phone: Yup.string()
          .max(19, "Enter the correct number")
          .min(19, "Enter the correct number")
          .matches(/^[^#]*$/, "Invalid phone number")
          .required("Required"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        setIsLoading(true);
        const state = loadDataFromLocalStorage() || {};
        await new Promise((resolve) => {
          setTimeout(() => {
            setSubmitting(false);
            resolve();
            dispatch(sendCartData(state.cartList, values, state));
            console.log({ client: values, wines: state.cartList });
          }, 2000);
        });

        setIsLoading(false);

        // dispatch(clearCart([]));

        saveDataToLocalStorage({
          ...state,
          cartList: [],
        });
      }}
    >
      {({ values, setFieldValue, isSubmitting }) => (
        <Form className="form" action="http://localhost:3000/">
          <label className="form-label m-3" htmlFor="firstName">
            First Name
          </label>
          <Field className="form-control" name="firstName" type="text" />
          <ErrorMessage
            className="text-danger"
            component="div"
            name="firstName"
          />

          <label htmlFor="lastName" className="form-label m-3">
            Last Name
          </label>
          <Field className="form-control" name="lastName" type="text" />
          <ErrorMessage
            className="text-danger"
            component="div"
            name="lastName"
          />

          <label htmlFor="age" className="form-label m-3">
            Your age
          </label>
          <Field className="form-control" name="age" type="number" />
          <ErrorMessage className="text-danger" component="div" name="age" />

          <label htmlFor="address" className="form-label m-3">
            Address
          </label>
          <Field className="form-control" name="address" type="text" />
          <ErrorMessage
            className="text-danger"
            component="div"
            name="address"
          />

          <label htmlFor="phone" className="form-label m-3">
            Phone
          </label>
          <PatternFormat
            className="form-control"
            id="phone"
            name="phone"
            type="tel"
            format="+### (##) ### ## ##"
            mask="#"
            value={values.phone}
            onChange={(event) => setFieldValue("phone", event.target.value)}
          />
          <ErrorMessage className="text-danger" component="div" name="phone" />

          {isLoading ? (
            <Spiner />
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-success m-3"
            >
              Checkout
            </button>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default BuyForm;
