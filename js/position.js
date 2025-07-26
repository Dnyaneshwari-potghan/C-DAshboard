document.getElementById("request").addEventListener("click", function() {
    // Placeholder for AJAX request to fetch trade data
    console.log("Fetching data...");
    
    // Example data
    let data = [
        { time: "12:00", login: "1234", ticket: "5678", symbol: "EUR/USD", type: "Buy", volume: "1.0", price: "1.1234", sl: "-", tp: "-", profit: "+50", comm: "0" }
    ];

    let tableBody = document.getElementById("table-body");
    tableBody.innerHTML = "";

    data.forEach(row => {
        let tr = document.createElement(".position-table-tr");
        for (let key in row) {
            let td = document.createElement(".position-table-td");
            td.textContent = row[key];
            tr.appendChild(position-table-td);
        }
        tableBody.appendChild(position-table-tr);
    });
});

document.getElementById("export").addEventListener("click", function() {
    let csv = "Time,Login,Ticket,Symbol,Type,Volume,Price (open),SL,TP,Profit,Comm\n";
    let rows = document.querySelectorAll("table tbody tr");

    rows.forEach(row => {
        let cells = row.querySelectorAll("td");
        let rowData = [];
        cells.forEach(cell => rowData.push(cell.textContent));
        csv += rowData.join(",") + "\n";
    });

    let blob = new Blob([csv], { type: "text/csv" });
    let url = URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.href = url;
    a.download = "trade_data.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
