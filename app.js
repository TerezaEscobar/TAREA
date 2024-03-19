const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const responseDiv = document.getElementById('response');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;

  fetch('http://localhost:3000/api/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Invalid email or password');
    }
  })
  .then(data => {
    responseDiv.textContent = data.message;
  })
  .catch(error => {
    responseDiv.textContent = error.message;
  });
});
