const rightClickArea = document.getElementById('rightClickArea');
const popupBox = document.getElementById('popupBox');
const arrowButton = document.getElementById('arrowButton');
const boxList = document.getElementById('boxList');

// Toggle popup on right-click
rightClickArea.addEventListener('contextmenu', function (e) {
    e.preventDefault();

    if (popupBox.style.display === 'block') {
        popupBox.style.display = 'none';
        boxList.style.display = 'none';
    } else {
        popupBox.style.left = `${e.pageX + 10}px`;
        popupBox.style.top = `${e.pageY + 10}px`;
        popupBox.style.display = 'block';
    }
});

// Close the popup and boxList when clicking outside
window.addEventListener('click', function (e) {
    // If clicked outside of the popup box and box list, hide them
    if (!popupBox.contains(e.target) && !rightClickArea.contains(e.target)) {
        popupBox.style.display = 'none';
        boxList.style.display = 'none';
    }

    // If clicked outside the arrow and box list, hide the box list
    if (!arrowButton.contains(e.target) && !boxList.contains(e.target)) {
        boxList.style.display = 'none';
        popupBox.style.display = 'none';
    }
});

// Click event on the arrow to toggle the hidden box
arrowButton.addEventListener('click', function (e) {
    e.stopPropagation(); // Prevent closing the popup when clicking inside
    boxList.style.display = (boxList.style.display === 'block') ? 'none' : 'block';
    // popupBox.style.display = (popupBox.style.display === 'block') ? 'none' : 'block';
});
