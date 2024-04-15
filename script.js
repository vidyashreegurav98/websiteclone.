// Function to handle user authentication
function authenticate() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Hardcoded username and password for demo purposes
    const validUsername = 'user';
    const validPassword = 'password';
  
    if (username === validUsername && password === validPassword) {
      // Display welcome message
      alert('Welcome, ' + username + '!');
    } else {
      // Display error message
      alert('Invalid username or password. Please try again.');
    }
  }
  
  // Event listener for login form submission
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    authenticate(); // Call the authentication function
  });