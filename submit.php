<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST['name']);
    $tel = trim($_POST['tel']);

    if (empty($name) || empty($tel)) {
        echo "Пожалуйста, заполните все поля.";
        exit;
    }
    
    $to = "your-email@example.com"; 
    $subject = "Новая заявка на ремонт";
    $message = "Имя: $name\nТелефон: $tel";
    $headers = "From: no-reply@example.com\r\n"; 

    if (mail($to, $subject, $message, $headers)) {
        echo "Заявка отправлена успешно!";
    } else {
        echo "Ошибка при отправке заявки.";
    }
} else {
    echo "Некорректный запрос.";
}
?>