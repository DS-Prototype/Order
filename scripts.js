document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-button');
    const printButton = document.getElementById('print-button');
    const bubbleContainer = document.getElementById('bubble-container');

    addButton.addEventListener('click', addBubble);
    printButton.addEventListener('click', printResults);

    function addBubble() {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');

        const typeDropdown = document.createElement('select');
        typeDropdown.classList.add('type-dropdown');
        typeDropdown.innerHTML = `
            <option value="area">Area</option>
            <option value="perimeter">Perimeter</option>
        `;

        const widthInput = document.createElement('input');
        widthInput.type = 'number';
        widthInput.classList.add('width-input');
        widthInput.placeholder = 'Width';

        const lengthInput = document.createElement('input');
        lengthInput.type = 'number';
        lengthInput.classList.add('length-input');
        lengthInput.placeholder = 'Length';

        const unitDropdown = document.createElement('select');
        unitDropdown.classList.add('unit-dropdown');
        unitDropdown.innerHTML = `
            <option value="mm">mm</option>
            <option value="inch">inch</option>
        `;

        bubble.appendChild(typeDropdown);
        bubble.appendChild(widthInput);
        bubble.appendChild(lengthInput);
        bubble.appendChild(unitDropdown);

        bubbleContainer.appendChild(bubble);
    }

    function printResults() {
        const bubbles = document.querySelectorAll('.bubble');
        const results = [];

        bubbles.forEach(bubble => {
            const type = bubble.querySelector('.type-dropdown').value;
            const width = parseFloat(bubble.querySelector('.width-input').value);
            const length = parseFloat(bubble.querySelector('.length-input').value);
            const unit = bubble.querySelector('.unit-dropdown').value;

            let result;
            if (type === 'area') {
                result = width * length;
            } else if (type === 'perimeter') {
                result = 2 * (width + length);
            }

            results.push({
                type: type,
                width: width,
                length: length,
                unit: unit,
                result: result
            });
        });

        localStorage.setItem('results', JSON.stringify(results));
        window.location.href = 'results.html';
    }
});
