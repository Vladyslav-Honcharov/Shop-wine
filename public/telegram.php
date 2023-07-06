<?php
session_start();
define ('ACCESS', 'TRUE'); // разрешаем обращение к файлу конфигурации
// формируем массив с товарами в заказе (если товар один - оставляйте только первый элемент массива)

$sitename = "http://localhost:8000/telegram.php";



//$name = stripslashes(htmlspecialchars($_POST['name']));
//$phone = stripslashes(htmlspecialchars($_POST['phone']));

$name = $_POST['firstName'] . ' ' . $_POST['lastName'];
$phone = $_POST['phone'];
$product_name = $_POST['product_name'];
$product_price = $_POST['product_price'];;




if (stripslashes(htmlspecialchars($_POST['country']))) {
    $country = stripslashes(htmlspecialchars($_POST['country']));
}



// $success_url = "/spasibo.html";
$texttg = urlencode("⭐️ Новый Лид ⭐️:\n\n".$sitename."\n\nФИО: ".$name."\nТелефон: ".$phone."\n\nЗаявка пришла с сайта: ".$_SERVER['HTTP_REFERER']."\nВремя заказа: ".date("Y-m-d H:i:s"));



// 
// Формируем текст сообщения для SMS
$message = "ФИО: {$name}\nКонтактный телефон: {$phone}\n\nЗаказанные товары:\n{$product_name}\nЦены:\n{$product_price}";

// Отправка SMS на почту
$sendtoadmin = 'tawzi14@gmail.com'; // Замените на свой адрес электронной почты
$sendtheme = 'Заявка с сайта слим';

$subject = $sendtheme;
$addressat = "$sendtoadmin";

// $sendMail = mail($addressat, $subject, $message, "Content-type:text/plain;charset=utf-8\r\n");

$sendToTelegram = fopen("https://api.telegram.org/bot5579527705:AAGtUaTXYIA0VujRCHPjcYIK5FyOxKeUxMY/sendMessage?chat_id=-1001987589785&parse_mode=html&text=$texttg","r");




// if($sendMail){
// //     if ($sendToTelegram) {}
// //     header('Location: ' . $success_url);
// // } else {
// //     echo '<h1 style="color:green;">Ошибка!</h1>';
// }
?>