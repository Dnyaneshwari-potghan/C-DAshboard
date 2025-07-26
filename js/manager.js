const containerBox = document.getElementById('containerBox');
const menuPopup = document.getElementById('menuPopup');
const createManager = document.getElementById('createManager');
const popupForm = document.getElementById('popupForm');
const screenOverlay = document.getElementById('screenOverlay');
const closePopup = document.getElementById('closePopup');

containerBox.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    menuPopup.style.left = `${e.clientX}px`;
    menuPopup.style.top = `${e.clientY}px`;
    menuPopup.style.display = 'block';
});

window.addEventListener('click', function (e) {
    if (!menuPopup.contains(e.target) && !containerBox.contains(e.target)) {
        menuPopup.style.display = 'none';
    }
});

createManager.addEventListener('click', function () {
    menuPopup.style.display = 'none';
    popupForm.style.display = 'block';
    screenOverlay.style.display = 'block';
});

closePopup.addEventListener('click', function () {
    popupForm.style.display = 'none';
    screenOverlay.style.display = 'none';
});

screenOverlay.addEventListener('click', function () {
    popupForm.style.display = 'none';
    screenOverlay.style.display = 'none';
});