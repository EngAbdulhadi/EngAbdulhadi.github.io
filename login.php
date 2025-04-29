<?php

if (isset($_POST['E-Posta'], $_POST['sifre']) 
    && $_POST['E-Posta'] != '' 
    && $_POST['sifre'] != '') {
    
    echo "Kayıt İşleminiz Yapıldı...<br>";
    echo "<b>" . $_POST['E-Posta'] . ' - ' . $_POST['sifre'] . "</b>";
    
} else {
    echo "Bilgilerinizi Kontrol Edip Tekrar Giriş Yapın.<br>";
    echo "Eksik Bilgi Girdiniz...<br>";
    echo "<p><a href='html/login.html'>&lt;GERİ DÖN&gt;</a></p>";
}

?>
