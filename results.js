document.addEventListener('DOMContentLoaded', () => {
    const resultsContainer = document.getElementById('results-container');
    const backButton = document.getElementById('back-button');

    backButton.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    const results = JSON.parse(localStorage.getItem('results'));

    if (results && results.length > 0) {
        results.forEach(result => {
            const resultElement = document.createElement('div');
            resultElement.classList.add('result');
            resultElement.innerHTML = `
                <p>Type: ${result.type}</p>
                <p>Width: ${result.width}${result.unit}</p>
                <p>Length: ${result.length}${result.unit}</p>
                <p>Result: ${result.result}${result.unit === 'mm' ? ' mm²' : ' inch²'}</p>
            `;
            resultsContainer.appendChild(resultElement);
        });
    } else {
        resultsContainer.innerHTML = '<p>No results found.</p>';
    }
});
