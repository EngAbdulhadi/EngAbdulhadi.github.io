/*cv dosyasini indirmek icin */
function downloadCV() {
    const link = document.createElement('a');
    link.href = '../assets/resume.pdf'; 
    link.download = 'AbdulhadiCV.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
/*sayfalari degistirirken kullanilan aktsiyon icin */
document.addEventListener("DOMContentLoaded", () => {
  // دخول الصفحة
  document.body.classList.add("page-transition-enter");
  requestAnimationFrame(() => {
    document.body.classList.add("page-transition-enter-active");
  });

  // عند الضغط على أي رابط يحمل class معين
  const links = document.querySelectorAll("a.transition-link");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      const href = this.href;

      if (href && href !== window.location.href) {
        e.preventDefault();

        document.body.classList.add("page-transition-exit");

        // نستخدم next frame عشان تشتغل الـ transition
        requestAnimationFrame(() => {
          document.body.classList.add("page-transition-exit-active");
        });

        setTimeout(() => {
          window.location.href = href;
        }, 500); // نفس مدة الأنيميشن
      }
    });
  });
});
/*offcanvasi kullandiktan sonra kapatma kodu */
document.querySelectorAll('.list-group-item').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); 
    const targetSelector = this.getAttribute('data-target');
    const targetEl = document.querySelector(targetSelector);
    if (targetEl) {
      targetEl.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    const offcanvasEl = document.querySelector('.offcanvas.show');
    if (offcanvasEl) {
      const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
      setTimeout(() => {
        bsOffcanvas.hide();
      }, 400);
    }
  });
});
/*modlari degistirmek icin */
(() => {
    'use strict'
  
    const getStoredTheme = () => localStorage.getItem('theme')
    const setStoredTheme = theme => localStorage.setItem('theme', theme)
  
    const getPreferredTheme = () => {
      const storedTheme = getStoredTheme()
      if (storedTheme) {
        return storedTheme
      }
  
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
  
    const setTheme = theme => {
      if (theme === 'auto') {
        document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
      } else {
        document.documentElement.setAttribute('data-bs-theme', theme)
      }
    }
  
    setTheme(getPreferredTheme())
  
    const showActiveTheme = (theme, focus = false) => {
      const themeSwitcher = document.querySelector('#bd-theme')
  
      if (!themeSwitcher) {
        return
      }
  
      const themeSwitcherText = document.querySelector('#bd-theme-text')
      const activeThemeIcon = document.querySelector('.theme-icon-active use')
      const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
      const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')
  
      document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
        element.classList.remove('active')
        element.setAttribute('aria-pressed', 'false')
      })
  
      btnToActive.classList.add('active')
      btnToActive.setAttribute('aria-pressed', 'true')
      activeThemeIcon.setAttribute('href', svgOfActiveBtn)
      const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
      themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)
  
      if (focus) {
        themeSwitcher.focus()
      }
    }
  
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      const storedTheme = getStoredTheme()
      if (storedTheme !== 'light' && storedTheme !== 'dark') {
        setTheme(getPreferredTheme())
      }
    })
  
    window.addEventListener('DOMContentLoaded', () => {
      showActiveTheme(getPreferredTheme())
  
      document.querySelectorAll('[data-bs-theme-value]')
        .forEach(toggle => {
          toggle.addEventListener('click', () => {
            const theme = toggle.getAttribute('data-bs-theme-value')
            setStoredTheme(theme)
            setTheme(theme)
            showActiveTheme(theme, true)
          })
        })
    })
  })()