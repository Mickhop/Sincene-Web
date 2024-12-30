document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'paintdao' && password === 'nongpeng') {
      window.location.href = 'main.html';
    } else {
      document.getElementById('error-message').textContent = 'Invalid username or password.';
    }
  });
  