let lastOpenedBox = null; // Track the last opened box

document.querySelectorAll('.click-btn').forEach(button => {
    button.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevents immediate closing

        let targetBoxId = this.getAttribute('data-target');
        let targetBox = document.getElementById(targetBoxId);

        // Hide the previously opened box if it's different
        if (lastOpenedBox && lastOpenedBox !== targetBox) {
            lastOpenedBox.style.display = 'none';
        }

        // Toggle the current box
        if (getComputedStyle(targetBox).display === 'none') {
            targetBox.style.display = 'block';
            lastOpenedBox = targetBox;
        } else {
            targetBox.style.display = 'none';
            lastOpenedBox = null;
        }
    });
});

// Hide all boxes when clicking outside
document.addEventListener('click', function () {
    if (lastOpenedBox) {
        lastOpenedBox.style.display = 'none';
        lastOpenedBox = null;
    }
});

// Prevent closing when clicking inside a box
document.querySelectorAll('.toggle-box').forEach(box => {
    box.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});
