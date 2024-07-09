document.addEventListener('DOMContentLoaded', () => {
    const resultsTableBody = document.querySelector('#results-table tbody');
    const backButton = document.getElementById('back-button');

    // Retrieve results from localStorage
    const results = JSON.parse(localStorage.getItem('results')) || [];

    // Function to create a table row for each result
    function createTableRow(result) {
        const row = document.createElement('tr');

        const typeCell = document.createElement('td');
        typeCell.textContent = result.type;
        row.appendChild(typeCell);

        const widthCell = document.createElement('td');
        widthCell.textContent = result.width;
        row.appendChild(widthCell);

        const lengthCell = document.createElement('td');
        lengthCell.textContent = result.length;
        row.appendChild(lengthCell);

        const unitCell = document.createElement('td');
        unitCell.textContent = result.unit;
        row.appendChild(unitCell);

        const resultCell = document.createElement('td');
        resultCell.textContent = result.result;
        row.appendChild(resultCell);

        return row;
    }

    // Populate the table with results
    results.forEach(result => {
        const row = createTableRow(result);
        resultsTableBody.appendChild(row);
    });

    // Back button functionality
    backButton.addEventListener('click', () => {
        window.location.href = 'index.html'; // Adjust path if needed
    });
});
