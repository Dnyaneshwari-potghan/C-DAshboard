const contextArea = document.getElementById('contextArea');
const contextMenu = document.getElementById('contextMenu');
const dropdownArrow = document.getElementById('dropdownArrow');
const dropdownBox = document.getElementById('dropdownBox');

contextArea.addEventListener('contextmenu', function (e) {
    e.preventDefault();

    if (contextMenu.style.display === 'block') {
        contextMenu.style.display = 'none';
        dropdownBox.style.display = 'none';
    } else {
        contextMenu.style.left = `${e.pageX + 10}px`;
        contextMenu.style.top = `${e.pageY + 10}px`;
        contextMenu.style.display = 'block';
    }
});

window.addEventListener('click', function (e) {
    if (!contextMenu.contains(e.target) && !contextArea.contains(e.target)) {
        contextMenu.style.display = 'none';
        dropdownBox.style.display = 'none';
    }

    if (!dropdownArrow.contains(e.target) && !dropdownBox.contains(e.target)) {
        dropdownBox.style.display = 'none';
        contextMenu.style.display = 'none';
    }
});

dropdownArrow.addEventListener('click', function (e) {
    e.stopPropagation();
    dropdownBox.style.display = (dropdownBox.style.display === 'block') ? 'none' : 'block';
});