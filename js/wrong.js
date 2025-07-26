document.addEventListener("DOMContentLoaded", function() {
    // Hide Form 1 when clicking its wrong sign button
    document.getElementById("wrongSign1").addEventListener("click", function () {
      document.getElementById("formContainer1").style.display = "none";
    });

    // Hide Form 2 when clicking its wrong sign button
    document.getElementById("wrongSign2").addEventListener("click", function () {
      document.getElementById("formContainer2").style.display = "none";
    });
 

   // Hide Form 3 when clicking its wrong sign button
   document.getElementById("wrongSign3").addEventListener("click", function () {
    document.getElementById("formContainer3").style.display = "none";
  });

     // Hide Form 4 when clicking its wrong sign button
     document.getElementById("wrongSign6").addEventListener("click", function () {
      document.getElementById("formContainer6").style.display = "none";
    });
});




// -------------------------------------------
 
function showTab(tabName, event) {
  // Hide all form contents
  document.querySelectorAll(".form-content").forEach(content => {
      content.style.display = "none";
  });

  // Show the selected tab content
  const selectedTab = document.getElementById(tabName + "Tab");
  if (selectedTab) {
      selectedTab.style.display = "block";
  }

  // Remove 'active' class from all tabs
  document.querySelectorAll(".tab").forEach(tab => {
      tab.classList.remove("active");
  });

  // Ensure event exists before using it
  if (event) {
      event.currentTarget.classList.add("active");
  }
}