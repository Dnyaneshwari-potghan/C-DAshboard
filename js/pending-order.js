const boxContainer6 = document.getElementById('boxContainer6');
const popupMenu1 = document.getElementById('popupMenu1');
const toggleButton = document.getElementById('toggleButton');
const submenuList1 = document.getElementById('submenuList1');

boxContainer6.addEventListener('contextmenu', function (e) {
    e.preventDefault();

    if (popupMenu1.style.display === 'block') {
        popupMenu1.style.display = 'none';
        submenuList1.style.display = 'none';
    } else {
        popupMenu1.style.left = `${e.pageX + 10}px`;
        popupMenu1.style.top = `${e.pageY + 10}px`;
        popupMenu1.style.display = 'block';
    }
});

window.addEventListener('click', function (e) {
    if (!popupMenu1.contains(e.target) && !boxContainer6.contains(e.target)) {
        popupMenu1.style.display = 'none';
        submenuList1.style.display = 'none';
    }

    if (!toggleButton.contains(e.target) && !submenuList1.contains(e.target)) {
        submenuList1.style.display = 'none';
        popupMenu1.style.display = 'none';
    }
});

toggleButton.addEventListener('click', function (e) {
    e.stopPropagation();
    submenuList1.style.display = (submenuList1.style.display === 'block') ? 'none' : 'block';
});