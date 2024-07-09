document.addEventListener('DOMContentLoaded', () => {
    const resultsContainer = document.getElementById('results-container');
    const backButton = document.getElementById('back-button');

    // Retrieve results from localStorage
    const results = JSON.parse(localStorage.getItem('results')) || [];

    // Function to create a grid for each result
    function createResultGrid(result) {
        const grid = document.createElement('div');
        grid.classList.add('result-grid');

        const typeLabel = document.createElement('div');
        typeLabel.classList.add('grid-item');
        typeLabel.textContent = 'Type:';
        const typeValue = document.createElement('div');
        typeValue.classList.add('grid-item');
        typeValue.textContent = result.type;

        const widthLabel = document.createElement('div');
        widthLabel.classList.add('grid-item');
        widthLabel.textContent = 'Width:';
        const widthValue = document.createElement('div');
        widthValue.classList.add('grid-item');
        widthValue.textContent = result.width;

        const lengthLabel = document.createElement('div');
        lengthLabel.classList.add('grid-item');
        lengthLabel.textContent = 'Length:';
        const lengthValue = document.createElement('div');
        lengthValue.classList.add('grid-item');
        lengthValue.textContent = result.length;

        const unitLabel = document.createElement('div');
        unitLabel.classList.add('grid-item');
        unitLabel.textContent = 'Unit:';
        const unitValue = document.createElement('div');
        unitValue.classList.add('grid-item');
        unitValue.textContent = result.unit;

        const resultLabel = document.createElement('div');
        resultLabel.classList.add('grid-item');
        resultLabel.textContent = 'Result:';
        const resultValue = document.createElement('div');
        resultValue.classList.add('grid-item');
        resultValue.textContent = result.result;

        // Append labels and values to the grid
        grid.appendChild(typeLabel);
        grid.appendChild(typeValue);
        grid.appendChild(widthLabel);
        grid.appendChild(widthValue);
        grid.appendChild(lengthLabel);
        grid.appendChild(lengthValue);
        grid.appendChild(unitLabel);
        grid.appendChild(unitValue);
        grid.appendChild(resultLabel);
        grid.appendChild
