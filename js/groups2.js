document.getElementById("contextBox").addEventListener("contextmenu", function (event) {
    event.preventDefault();
    document.getElementById("modal").style.display = "flex";
});

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

window.onclick = function (event) {
    if (event.target === document.getElementById("modal")) {
        closeModal();
    }
};

function showTab(tabName, event) {
    // Hide all tab contents
    document.querySelectorAll(".form-content").forEach(content => {
        content.style.display = "none";
    });

    // Object to map tab names to content IDs
    const tabMap = {
        "common": "commonTab",
        "company": "companyTab",
        "margin": "marginTab",
        "symbol": "symbolTab",
        "commission": "commissionTab"  // Fixed mapping
    };

    const tabId = tabMap[tabName];

    if (tabId) {
        const tabContent = document.getElementById(tabId);
        if (tabContent) {
            tabContent.style.display = "block";
        } else {
            console.error("Tab content not found:", tabId);
        }
    } else {
        console.error("Invalid tab name:", tabName);
    }

    // Remove 'active' class from all tabs
    document.querySelectorAll(".tab").forEach(tab => {
        tab.classList.remove("active");
    });

    // Add 'active' class to clicked tab
    if (event && event.target) {
        event.target.classList.add("active");
    }
}

// Call showTab to set default tab when the page loads
showTab('commonTab');
