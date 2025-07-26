
      // Get references to the elements
      const loginForm = document.getElementById("loginForm");
      const accountLoginBtn = document.getElementById("accountLoginBtn");
      const wrongSign = document.getElementById("wrongSign");
  
      // Show the login form when the Account Login button is clicked
      accountLoginBtn.addEventListener("click", function() {
        loginForm.style.display = "block";
      });
  
      // Hide the login form when the wrong sign (X) is clicked
      wrongSign.addEventListener("click", function() {
        loginForm.style.display = "none";
      });