// const boxContainer2 = document.getElementById('boxContainer2');
// const popupMenu2 = document.getElementById('popupMenu2');
// const toggleButton = document.getElementById('toggleButton');
// const submenuList2 = document.getElementById('submenuList2');  // Corrected variable name

// boxContainer2.addEventListener('contextmenu', function (e) {
//     e.preventDefault();

//     if (popupMenu2.style.display === 'block') {
//         popupMenu2.style.display = 'none';
//         submenuList2.style.display = 'none';
//     } else {
//         popupMenu2.style.left = `${e.pageX + 10}px`;
//         popupMenu2.style.top = `${e.pageY + 10}px`;
//         popupMenu2.style.display = 'block';
//     }
// });

// window.addEventListener('click', function (e) {
//     if (!popupMenu2.contains(e.target) && !boxContainer2.contains(e.target)) {
//         popupMenu2.style.display = 'none';
//         submenuList2.style.display = 'none';
//     }

//     if (!toggleButton.contains(e.target) && !submenuList2.contains(e.target)) {
//         submenuList2.style.display = 'none';
//         popupMenu2.style.display = 'none';
//     }
// });

// toggleButton.addEventListener('click', function (e) {
//     e.stopPropagation();
//     submenuList2.style.display = (submenuList2.style.display === 'block') ? 'none' : 'block';
// });


const boxContainer8 = document.getElementById('boxContainer8');
const popupMenu8 = document.getElementById('popupMenu8');
const toggleButton8 = document.getElementById('toggleButton8');
const submenuList8 = document.getElementById('submenuList8');

// Show popup menu on right-click
boxContainer8.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    popupMenu8.style.left = `${e.pageX}px`;
    popupMenu8.style.top = `${e.pageY}px`;
    popupMenu8.style.display = 'block';
});

// Hide popup menu when clicking outside
window.addEventListener('click', function (e) {
    if (!popupMenu8.contains(e.target) && !boxContainer8.contains(e.target)) {
        popupMenu8.style.display = 'none';
    }

    // Ensure submenu remains open when clicking inside
    if (!toggleButton8.contains(e.target) && !submenuList8.contains(e.target)) {
        submenuList8.classList.remove('show');
        popupMenu8.classList.remove('show');
        popupMenu8.style.display = 'none';
    }
});

// Toggle submenu visibility when clicking the arrow
toggleButton8.addEventListener('click', function (e) {
    e.stopPropagation();
    submenuList8.classList.toggle('show');
});

// Prevent submenu from closing when clicking inside it
submenuList8.addEventListener('click', function (e) {
    e.stopPropagation();
});

// Show submenu when hovering over the menu
popupMenu8.addEventListener('mouseenter', function () {
    submenuList8.classList.add('show');
});

// Hide submenu when leaving the menu
popupMenu8.addEventListener('mouseleave', function () {
    submenuList8.classList.remove('show');
});