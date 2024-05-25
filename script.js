function insert_Row() {
    const table = document.getElementById("sampleTable");

    const newRow = document.createElement("tr");

    const cell1 = document.createElement("td");
    cell1.innerHTML = "New Cell1";
    const cell2 = document.createElement("td");
    cell2.innerHTML = "New Cell2";

    const existingCells = table.querySelectorAll("td");
    existingCells.forEach(cell => {
        cell.innerHTML = "";
    });

    newRow.appendChild(cell1);
    newRow.appendChild(cell2);

    table.insertBefore(newRow, table.firstChild);
}
