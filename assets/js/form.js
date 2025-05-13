// Seçiciler
const form = document.getElementById('iletisimForm');
const gonderBtn = document.getElementById('gonderBtn');
const temizleBtn = document.getElementById('temizleBtn');

gonderBtn.addEventListener('click', () => {
  const ad = document.getElementById('ad').value.trim();
  const email = document.getElementById('email').value.trim();
  const telefon = document.getElementById('telefon').value.trim();
  const cinsiyet = document.getElementById('cinsiyet').value;
  const mesaj = document.getElementById('mesaj').value.trim();

  const ilgiler = Array.from(document.querySelectorAll('input[name="ilgiler"]:checked'))
                      .map(checkbox => checkbox.value);

  let errors = [];

  // Doğrulamalar
  if (ad === "") errors.push("Ad boş olamaz.");
  if (email === "" || !/^\S+@\S+\.\S+$/.test(email)) errors.push("Geçerli bir email giriniz.");
  if (telefon === "" || !/^\d+$/.test(telefon)) errors.push("Telefon sadece rakamlardan oluşmalıdır.");
  if (cinsiyet === "") errors.push("Cinsiyet seçiniz.");

  if (errors.length > 0) {
    alert(errors.join('\n'));
    return;
  }

  // Verileri sessionStorage'a kaydet
  const formData = { ad, email, telefon, cinsiyet, ilgiler, mesaj };
  sessionStorage.setItem("formData", JSON.stringify(formData));

  // Sonuç sayfasına yönlendir
  window.location.href = "../html/form-sonuc.html";
});

// Temizle butonu
temizleBtn.addEventListener('click', () => {
  form.reset();
});




//framework ile yapmak (vue.js)
  const { createApp } = Vue;

  createApp({
    data() {
      return {
        ad: '',
        email: '',
        telefon: '',
        cinsiyet: '',
        ilgiler: [],
        mesaj: ''
      };
    },
    methods: {
      gonderVue() {
        // inputlardan değer al
        this.ad = document.getElementById('ad').value.trim();
        this.email = document.getElementById('email').value.trim();
        this.telefon = document.getElementById('telefon').value.trim();
        this.cinsiyet = document.getElementById('cinsiyet').value;
        this.ilgiler = Array.from(document.querySelectorAll('input[name="ilgiler"]:checked')).map(cb => cb.value);
        this.mesaj = document.getElementById('mesaj').value.trim();

        // Validasyon
        let errors = [];
        if (this.ad === "") errors.push("Ad boş olamaz.");
        if (this.email === "" || !/^\S+@\S+\.\S+$/.test(this.email)) errors.push("Geçerli bir email giriniz.");
        if (this.telefon === "" || !/^\d+$/.test(this.telefon)) errors.push("Telefon sadece rakam içermeli.");
        if (this.cinsiyet === "") errors.push("Cinsiyet seçiniz.");

        if (errors.length > 0) {
          alert("Vue.js ile kontrol sonucu:\n" + errors.join('\n'));
          return;
        }

        const formData = {
          ad: this.ad,
          email: this.email,
          telefon: this.telefon,
          cinsiyet: this.cinsiyet,
          ilgiler: this.ilgiler,
          mesaj: this.mesaj
        };

        sessionStorage.setItem("formData", JSON.stringify(formData));
        window.location.href = "../html/form-sonuc.html";
      }
    }
  }).mount('#vueApp');
  