document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Activate clicked tab
      tabs.forEach(t => t.classList.toggle('active', t === tab));

      // Show the correct form
      const type = tab.dataset.form;
      loginForm.style.display = type === 'login' ? 'block' : 'none';
      signupForm.style.display = type === 'signup' ? 'block' : 'none';
    });
  });
});
