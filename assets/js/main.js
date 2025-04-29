function togglePassword() {
    const passwordInput = document.getElementById('floatingPassword');
    const icon = document.getElementById('passwordToggleIcon');

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      icon.classList.remove('bi-eye-fill');
      icon.classList.add('bi-eye-slash-fill');
    } else {
      passwordInput.type = 'password';
      icon.classList.remove('bi-eye-slash-fill');
      icon.classList.add('bi-eye-fill');
    }
  }