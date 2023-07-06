import React from "react";
import "./Modal.scss";
import PropTypes from "prop-types";

const Modal = (props) => {
  const {
    header,
    closeButton,
    action,
    onClose,
    btnOne,
    btnSecond,
    onClickOutside,
    children,
    onClick,
    name,
    price,
    url,
    index,
  } = props;
  return (
    <div className="modal" onClick={onClickOutside}>
      <div className={"modal-content"}>
        <div className="modal-header">
          <h4>{header}</h4>
          {closeButton && (
            <button className="close-button" onClick={onClose}>
              X
            </button>
          )}
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button
            action={action}
            onClick={() => {
              onClick(name, price, url, index);
            }}
          >
            {btnOne}
          </button>
          <button action={action} onClick={onClose}>
            {btnSecond}
          </button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  header: PropTypes.string.isRequired,
  closeButton: PropTypes.bool,
  action: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  btnOne: PropTypes.string,
  btnSecond: PropTypes.string,
  onClickOutside: PropTypes.func,
  children: PropTypes.node,
  onClick: PropTypes.func,
  name: PropTypes.string,
  price: PropTypes.number,
  url: PropTypes.string,
  index: PropTypes.number,
};

export default Modal;
