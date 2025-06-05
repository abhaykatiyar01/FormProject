$(document).ready(function () {
  function isValidPhone(phone) {
    return /^\d{10}$/.test(phone);
  }

  function isValidPassword(password) {
    // At least 1 letter, 1 number, 1 special character, and minimum 6 characters
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(password);
  }

  $('#submitBtn').click(function (e) {
    e.preventDefault();

    let name = $('#name').val().trim();
    let phone = $('#phone').val().trim();
    let password = $('#password').val();
    let confirmPassword = $('#confirmPassword').val();

    let error = "";

    if (name === "") {
      error += "<p>Name is required.</p>";
    }

    if (!isValidPhone(phone)) {
      error += "<p>Phone number must be exactly 10 digits.</p>";
    }

    if (!isValidPassword(password)) {
      error += "<p>Password must be at least 6 characters, include a letter, a number, and a special character.</p>";
    }

    if (password !== confirmPassword) {
      error += "<p>Passwords do not match.</p>";
    }

    if (error !== "") {
      $('#error').html(error);
      $('#success').html("");
    } else {
      $('#error').html("");
      $('#success').html("Registration successful!");
    }
  });
});
