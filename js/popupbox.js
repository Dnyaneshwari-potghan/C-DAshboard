   // Prevent the default right-click menu and open the custom box
function openBox(event) {
    event.preventDefault(); // Prevent the browser's context menu from showing
  
    const box = document.getElementById("box");
    const form = document.getElementById("form");
  
    // If the form is visible, do not reopen the box
    if (form.style.display === "block") return;
  
    // Get cursor position and set box position
    const cursorX = event.clientX;
    const cursorY = event.clientY;
  
    box.style.left = `${cursorX + 20}px`; // Offset 20px to the right of the cursor
    box.style.top = `${cursorY}px`; // Align with cursor's Y position
    box.style.display = "block";
  }
  
  // Function to hide the box
  function hideBox() {
    const box = document.getElementById("box");
    box.style.display = "none";
  }
  
  // Function to show the form and hide the box
  function showForm() {
    const box = document.getElementById("box");
    const form = document.getElementById("form");
  
    box.style.display = "none";
    form.style.display = "block";
  }
  
  // Function to close the form
  function closeForm() {
    const form = document.getElementById("form");
    form.style.display = "none";
  }

  



      // Get references to the elements
      const loginForm = document.getElementById("loginForm");
      const accountLoginBtn = document.getElementById("login-u-dropdown");
      const wrongSign = document.getElementById("wrongSign");
  
      // Show the login form when the Account Login button is clicked
      accountLoginBtn.addEventListener("click", function() {
        loginForm.style.display = "block";
      });
  
      // Hide the login form when the wrong sign (X) is clicked
      wrongSign.addEventListener("click", function() {
        loginForm.style.display = "none";
      });