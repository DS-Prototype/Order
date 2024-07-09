document.addEventListener('DOMContentLoaded', () => {
    const resultsContainer = document.getElementById('results-container');
    const backButton = document.getElementById('back-button');

    // Retrieve results from localStorage
    const results = JSON.parse(localStorage.getItem('results')) || [];
    console.log('Retrieved results:', results);

    // Function to create a grid for each result
    function createResultGrid(result) {
        const grid = document.createElement('div');
        grid.classList.add('result-grid');

        const createGridItem = (label, value) => {
            const labelDiv = document.createElement('div');
            labelDiv.classList.add('grid-item');
            labelDiv.textContent = label;

            const valueDiv = document.createElement('div');
            valueDiv.classList.add('grid-item');
            valueDiv.textContent = value;

            grid.appendChild(labelDiv);
            grid.appendChild(valueDiv);
        };

        createGridItem('Type:', result.type);
        createGridItem('Width:', result.width);
        createGridItem('Length:', result.length);
        createGridItem('Unit:', result.unit);
        createGridItem('Result:', result.result);

        return grid;
    }

    // Populate the container with result grids
    results.forEach(result => {
        const grid = createResultGrid(result);
        resultsContainer.appendChild(grid);
    });

    // Back button functionality
    backButton.addEventListener('click', () => {
        window.location.href = 'index.html'; // Adjust path if needed
    });
});
