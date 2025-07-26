 

// const boxContainer4 = document.getElementById('boxContainer4');
// const popupMenu4 = document.getElementById('popupMenu2');
// const columnMenu = document.getElementById('columnMenu');
// const submenuList4 = document.getElementById('submenuList4');

// // Right-click event
// boxContainer4.addEventListener('contextmenu', function (e) {
//     e.preventDefault();
//     popupMenu4.style.left = `${e.pageX}px`;
//     popupMenu4.style.top = `${e.pageY}px`;
//     popupMenu4.style.display = 'block';
// });

// // Close menu when clicking outside
// window.addEventListener('click', function (e) {
//     if (!popupMenu4.contains(e.target) && !boxContainer4.contains(e.target)) {
//         popupMenu4.style.display = 'none';
//         submenuList4.style.display = 'none';
//     }

//     // Close the submenu if clicked outside of the submenu
//     if (!submenuList4.contains(e.target) && !columnMenu.contains(e.target)) {
//         submenuList4.style.display = 'none';
//         popupMenu4.style.display = 'none';
//     }
// });

// // Show submenu when clicking Column
// columnMenu.addEventListener('click', function (e) {
//     e.stopPropagation();
//     submenuList4.style.display = submenuList4.style.display === 'block' ? 'none' : 'block';

//     // Ensure submenu positioning is correct
//     submenuList4.style.left =  '4px';
//     submenuList4.style.top = '-75px';
// });

// // Open forms
// document.getElementById('newUser').addEventListener('click', function (e) {
//     e.stopPropagation();
//     closeAllForms();
//     openForm('newUserForm');
// });

// document.getElementById('editUser').addEventListener('click', function (e) {
//     e.stopPropagation();
//     closeAllForms();
//     openForm('editUserForm');
// });

// document.getElementById('deleteUser').addEventListener('click', function (e) {
//     e.stopPropagation();
//     closeAllForms();
//     openForm('deleteUserForm');
// });

// // Function to show form
// function openForm(formId) {
//     document.getElementById(formId).style.display = 'block';
// }

// // Function to close form
// function closeForm(formId) {
//     document.getElementById(formId).style.display = 'none';
// }

// // Close all forms before opening a new one
// function closeAllForms() {
//     document.getElementById('newUserForm').style.display = 'none';
//     document.getElementById('editUserForm').style.display = 'none';
//     document.getElementById('deleteUserForm').style.display = 'none';
// }



document.addEventListener('DOMContentLoaded', function () {
    const boxContainer4 = document.getElementById('boxContainer4');
    const popupMenu4 = document.getElementById('popupMenu2');
    const columnMenu = document.getElementById('columnMenu');
    const submenuList4 = document.getElementById('submenuList4');

    // Right-click event
    boxContainer4.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        popupMenu4.style.left = `${e.pageX}px`;
        popupMenu4.style.top = `${e.pageY}px`;
        popupMenu4.style.display = 'block';
    });

    // Close menu when clicking outside
    window.addEventListener('click', function (e) {
        if (!popupMenu4.contains(e.target) && !boxContainer4.contains(e.target)) {
            popupMenu4.style.display = 'none';
            submenuList4.style.display = 'none';
        }

        // Close the submenu if clicked outside of the submenu
        if (!submenuList4.contains(e.target) && !columnMenu.contains(e.target)) {
            submenuList4.style.display = 'none';
            popupMenu4.style.display = 'none';
        }
    });

    // Show submenu when clicking Column
    columnMenu.addEventListener('click', function (e) {
        e.stopPropagation();
        submenuList4.style.display = submenuList4.style.display === 'block' ? 'none' : 'block';

        // Ensure submenu positioning is correct
        submenuList4.style.left =  '4px';
        submenuList4.style.top = '-75px';
    });

    // Open forms
    document.getElementById('newUser').addEventListener('click', function (e) {
        e.stopPropagation();
        closeAllForms();
        openForm('newUserForm');
    });

    document.getElementById('editUser').addEventListener('click', function (e) {
        e.stopPropagation();
        closeAllForms();
        openForm('editUserForm');
    });

    document.getElementById('deleteUser').addEventListener('click', function (e) {
        e.stopPropagation();
        closeAllForms();
        openForm('deleteUserForm');
    });

    // Function to show form
    function openForm(formId) {
        document.getElementById(formId).style.display = 'block';
    }

    // Function to close form
    function closeForm(formId) {
        document.getElementById(formId).style.display = 'none';
    }

    // Close all forms before opening a new one
    function closeAllForms() {
        document.getElementById('newUserForm').style.display = 'none';
        document.getElementById('editUserForm').style.display = 'none';
        document.getElementById('deleteUserForm').style.display = 'none';
    }
});



function closeFormtab(formId) {
    // Close the form by hiding it
    document.getElementById(formId).style.display = 'none';
    
    // Optionally, go back to the previous page (history back)
    window.history.back();
}


function closeFormEtab(formId) {
    // Close the form by hiding it
    document.getElementById(formId).style.display = 'none';
    
    // Optionally, go back to the previous page (history back)
    window.history.back();
}

function closeFormdtab(formId) {
    // Close the form by hiding it
    document.getElementById(formId).style.display = 'none';
    
    // Optionally, go back to the previous page (history back)
    window.history.back();
}
