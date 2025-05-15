<?php

$email = $_POST['E-Posta'] ?? '';
$password = $_POST['sifre'] ?? '';


$valid_email = 'abdulhadi.krimesh@ogr.sakarya.edu.tr';
$valid_password = 'G231210577';

if (!empty($email) && !empty($password)) {
    
    if ($email === $valid_email && $password === $valid_password) {
        $username = explode('@', $email)[0];
        echo "<b>Hoşgeldiniz $username</b><br>";
        echo "<p><a href='index.html'>&lt;Hakkimda sayfasina git&gt;</a></p>";
    } else {
        echo "Bilgileriniz Hatalı. Lütfen tekrar deneyin.<br>";
        echo "<p><a href='html/login.html'>&lt;GERİ DÖN&gt;</a></p>";
    }

} else {
    echo "Eksik bilgi girdiniz. Lütfen tüm alanları doldurun.<br>";
    echo "<p><a href='html/login.html'>&lt;GERİ DÖN&gt;</a></p>";
}
?>
