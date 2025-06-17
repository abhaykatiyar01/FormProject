// Show/Hide Password
  document.getElementById('togglePassword').addEventListener('change', function () {
    const type = this.checked ? 'text' : 'password';
    document.getElementById('password').type = type;
    document.getElementById('confirmPassword').type = type;
  });

  // Form validation with alerts
  function validateForm() {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Phone number: 10 digits only
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      alert("❌ Phone number must be exactly 10 digits.");
      return false;
    }

    // Password pattern
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
    if (!passwordPattern.test(password)) {
      alert("❌ Password must be at least 8 characters, include a letter, number, and a special symbol.");
      return false;
    }

    if (password !== confirmPassword) {
      alert("❌ Passwords do not match.");
      return false;
    }

    alert("✅ Successfully signed up!");
    return true;
  }