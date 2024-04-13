// Function to show input dialog
function showInputDialog() {
    var data = [];
    // Loop to prompt user for input data for each column
    for (var i = 0; i < 4; i++) {
        if (i === 0) {
            var input = prompt("Enter origin of resource ");
        } else if (i === 1) {
            var input = prompt("Enter type of resource ");
        } else if (i === 2) {
            var input = prompt("Enter how altered or justification ");
        } else {
            var input = prompt("Enter addtional notes(fill it with 'N/A' if there is no addition) ");
        }
        // Check if input is empty
        if (input.trim() === "") {
            alert("Cannot insert row with empty fields.");
            return; // Return if input is empty, preventing further execution
        }
        data.push(input); // Add input data to the array
    }
    addRow(data); // Call addRow function with input data
}

// Function to add a row to the table
function addRow(data) {
    var table = document.getElementById("logTable").getElementsByTagName('tbody')[0]; // Get table body
    var newRow = table.insertRow(); // Insert a new row
    // Loop through input data to create table cells
    for (var i = 0; i < data.length; i++) {
        var cell = newRow.insertCell(); // Insert a new cell
        cell.innerHTML = data[i]; // Set cell content to input data
    }
    var actionCell = newRow.insertCell(); // Insert a new cell for action buttons
    // Add delete button to action cell
    actionCell.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';
}

// Function to delete a row from the table
function deleteRow(btn) {
    var row = btn.parentNode.parentNode; // Get the parent row of the button
    row.parentNode.removeChild(row); // Remove the row from the table
}
