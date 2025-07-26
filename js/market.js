   // Function to hide the admin container when the "wrong" button is clicked
   document.getElementById('wrong-sign').onclick = function() {
    document.getElementsByClassName('admin-container').style.display = 'none';
}

// Function to show the admin container when "Show Market Data" button is clicked
document.getElementsByClassName('show-market-data').onclick = function() {
    document.getElementsByClassName('admin-container').style.display = 'block';
}

// Optional: Cancel button functionality to reset form or hide the container
document.getElementById('cancel-btn').onclick = function() {
    document.getElementsByClassName('admin-container').style.display = 'none';
}