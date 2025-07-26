
 // Function to toggle the dropdown menu
function toggleDropdown(dropdownId, arrowId) {
    const dropdown = document.getElementById(dropdownId);
    const arrow = document.getElementById(arrowId);
  
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
        if (arrow) {
            arrow.classList.remove("rotate");
        }
    } else {
        dropdown.style.display = "block";
        if (arrow) {
            arrow.classList.add("rotate");
        }
    }
  }
  
  // Function to show the content of a section in the main content area
  function showContent(sectionId) {
    console.log("Showing content:", sectionId);
  
    // Hide all sections
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(section => {
        section.classList.remove('active');
    });
  
    // Show the clicked section
    const content = document.getElementById(sectionId);
    if (content) {
        content.classList.add('active');
    }
  }
  
  

 
//   ---------------------------------------


 // Add interactivity if needed
 document.querySelector('.request-btn').addEventListener('click', () => {
    alert('Request button clicked!');
});