"use strict";
document.querySelector('#polyg').addEventListener('click', (event) => {
    event.preventDefault();
    var input = document.querySelector('#sides').value;
    if (input == "" || input.charAt(0) == "," || input.charAt(input.length - 1) == ",") {
        document.querySelector('#output6').innerHTML = `<p class="text-warning">Please enter a valid value and use the correct format as shown in the example</p>`;
        document.querySelector('#sides').value = "";
    }
    else {
        const array = input.split(',');
        let isInvalid = false;
        for (let i = 0; i < array.length; i++) {
            if (isNaN(parseFloat(array[i]))) {
                isInvalid = true;
                break;
            }
        }
        if (isInvalid) {
            document.querySelector('#output6').innerHTML = `<p class="text-warning">Please enter a valid value and use the correct format as shown in the example</p>`;
            document.querySelector('#sides').value = "";
        }
        else {
            const array = input.split(',').map(Number);
            var hasNegative = false;
            for (let i = 0; i < array.length; i++) {
                if (array[i] <= 0) {
                    hasNegative = true;
                    break;
                }
            }
            if (hasNegative) {
                document.querySelector('#output6').innerHTML = `<p class="text-warning">All the segments must be a positive number</p>`;
                document.querySelector('#sides').value = "";
            }
            else if (array.length < 3) {
                document.querySelector('#output6').innerHTML = `<p class="text-warning">There is no polygon with less than 3 segments</p>`;
                document.querySelector('#sides').value = "";
            }
            else {
                if (isNaN(array.reduce((a, b) => a + b, 0))) {
                    document.querySelector('#output6').innerHTML = `<p class="text-warning">Please enter a valid value and use the correct format as shown in the example</p>`;
                    document.querySelector('#sides').value = "";
                }
                else {
                    document.querySelector('#output6').innerHTML = `<p class="text-success">C = ${array.reduce((a, b) => a + b, 0)}cm</p>`;
                    document.querySelector('#sides').value = "";
                }
            }
        }
    }
});
