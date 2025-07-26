function hoverName(element) {
  // Add hover effect to the "name" section
  element.classList.add('hovering');
}

function removeHoverName(element) {
  // Remove hover effect from the "name" section
  element.classList.remove('hovering');
}

function highlightBox(element) {
  // Remove 'clicked' class from all boxes
  const allBoxes = document.querySelectorAll('.watch-boxes');
  allBoxes.forEach(box => box.classList.remove('clicked'));

  // Add 'clicked' class to the selected box
  element.classList.add('clicked');
}
 

 