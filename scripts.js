document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-button');
    const printButton = document.getElementById('print-button');
    const bubbleContainer = document.getElementById('bubble-container');

    addButton.addEventListener('click', addBubble);
    printButton.addEventListener('click', printResults);

    function addBubble() {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');

        // Create type dropdown with options
        const typeDropdown = document.createElement('select');
        typeDropdown.classList.add('type-dropdown');
        typeDropdown.innerHTML = `
            <option value="DS-1">DS-1</option>
            <option value="DS-1 Pro">DS-1 Pro</option>
            <option value="DS-1 Plus">DS-1 Plus</option>
            <option value="DS-2">DS-2</option>
            <option value="DS-2 Plus">DS-2 Plus</option>
            <option value="DS-2 OI">DS-2 OI</option>
            <option value="DS-3">DS-3</option>
            <option value="DS-3 Plus">DS-3 Plus</option>
            <option value="DS-3 OI">DS-3 OI</option>
            console.log()
        `;

        // Create width input
        const widthInput = document.createElement('input');
        widthInput.type = 'number';
        widthInput.classList.add('width-input');
        widthInput.placeholder = 'Width';

        // Create length input
        const lengthInput = document.createElement('input');
        lengthInput.type = 'number';
        lengthInput.classList.add('length-input');
        lengthInput.placeholder = 'Length';

        // Create unit dropdown with options
        const unitDropdown = document.createElement('select');
        unitDropdown.classList.add('unit-dropdown');
        unitDropdown.innerHTML = `
            <option value="mm">mm</option>
            <option value="inch">inch</option>
        `;

        // Append dropdowns and inputs to the bubble
        bubble.appendChild(typeDropdown);
        bubble.appendChild(widthInput);
        bubble.appendChild(lengthInput);
        bubble.appendChild(unitDropdown);

        // Append bubble to the container
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
            // Adjust the logic based on your calculation requirements
            if (type === 'DS-1') {
                result = 10000;
            } else if (type === 'DS-1 Plus') {
                result = 666;
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
