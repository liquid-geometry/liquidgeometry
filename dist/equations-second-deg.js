"use strict";
document.querySelector('#button').addEventListener('click', (event) => {
    event.preventDefault();
    const a = parseFloat(document.querySelector('#a').value);
    const c = parseFloat(document.querySelector('#c').value);
    if (isNaN(a) || isNaN(c)) {
        document.querySelector('#output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#a').value = "";
        document.querySelector('#c').value = "";
    }
    else if (-c < 0 && a > 0) {
        document.querySelector('#output').innerHTML = `<p class="text-warning">The equation is a contradiction in R: it has no solutions <br /> X = &#177; ${reduceFraction(Math.sqrt(c), Math.sqrt(a))}i in C</p>`;
        document.querySelector('#a').value = "";
        document.querySelector('#c').value = "";
    }
    else if (-c > 0 && a < 0) {
        document.querySelector('#output').innerHTML = `<p class="text-warning">The equation is a contradiction in R: it has no solutions <br /> X = &#177; ${reduceFraction(Math.sqrt(-c), Math.sqrt(-a))}i in C</p>`;
        document.querySelector('#a').value = "";
        document.querySelector('#c').value = "";
    }
    else if (a == 0 && -c != 0) {
        document.querySelector('#output').innerHTML = `<p class="text-warning">The equation is a contradiction in R: it has no solutions</p>`;
        document.querySelector('#a').value = "";
        document.querySelector('#c').value = "";
    }
    else if (a == 0 && -c == 0) {
        document.querySelector('#output').innerHTML = `<p class="text-warning">The equation is an identity: it is true for all values</p>`;
        document.querySelector('#a').value = "";
        document.querySelector('#c').value = "";
    }
    else {
        const x = Math.sqrt(-c / a);
        if (x == 0) {
            document.querySelector('#output').innerHTML = `<p class="text-success">x = ${x}</p>`;
            document.querySelector('#a').value = "";
            document.querySelector('#c').value = "";
        }
        else {
            if (-c < 0) {
                document.querySelector('#output').innerHTML = `<p class="text-success">x = &#177;${reduceFraction(-Math.sqrt(c), -Math.sqrt(-a))}</p>`;
                document.querySelector('#a').value = "";
                document.querySelector('#c').value = "";
            }
            else {
                document.querySelector('#output').innerHTML = `<p class="text-success">x = &#177;${reduceFraction(Math.sqrt(-c), Math.sqrt(a))}</p>`;
                document.querySelector('#a').value = "";
                document.querySelector('#c').value = "";
            }
        }
    }
});
document.querySelector('#button2').addEventListener('click', (event) => {
    event.preventDefault();
    const a = parseFloat(document.querySelector('#a2').value);
    const b = parseFloat(document.querySelector('#b2').value);
    if (isNaN(a) || isNaN(b)) {
        document.querySelector('#output2').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#a2').value = "";
        document.querySelector('#b2').value = "";
    }
    else if (a == 0 && b == 0) {
        document.querySelector('#output2').innerHTML = `<p class="text-warning">The equation is an identity: it is true for all values</p>`;
        document.querySelector('#a2').value = "";
        document.querySelector('#b2').value = "";
    }
    else if ((a != 0 && b == 0) || (a == 0 && b != 0)) {
        document.querySelector('#output2').innerHTML = `<p class="text-success">x = 0</p>`;
        document.querySelector('#a2').value = "";
        document.querySelector('#b2').value = "";
    }
    else {
        const x1 = 0;
        document.querySelector('#output2').innerHTML = `<p class="text-success">x = ${x1} OR x = ${reduceFraction(-b, a)}</p>`;
        document.querySelector('#a2').value = "";
        document.querySelector('#b2').value = "";
    }
});
document.querySelector('#button3').addEventListener('click', (event) => {
    event.preventDefault();
    const a = parseFloat(document.querySelector('#a3').value);
    const b = parseFloat(document.querySelector('#b3').value);
    const c = parseFloat(document.querySelector('#c3').value);
    const D = b * b - 4 * a * c;
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.querySelector('#output3').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.querySelector('#a3').value = "";
        document.querySelector('#b3').value = "";
        document.querySelector('#c3').value = "";
    }
    else if (a == 0 && b == 0 && c == 0) {
        document.querySelector('#output3').innerHTML = `<p class="text-warning">The equation is an identity: it is true for all values</p>`;
        document.querySelector('#a3').value = "";
        document.querySelector('#b3').value = "";
        document.querySelector('#c3').value = "";
    }
    else if (a == 0 && (b == 0) && (c != 0)) {
        document.querySelector('#output3').innerHTML = `<p class="text-warning">The equation is a contradiction in R: it has no solutions</p>`;
        document.querySelector('#a3').value = "";
        document.querySelector('#b3').value = "";
        document.querySelector('#c3').value = "";
    }
    else if ((a == 0 && b != 0 && c == 0) || (a == 0 && b != 0 && c != 0)) {
        document.querySelector('#output3').innerHTML = `<p class="text-success">x = ${reduceFraction(-c, b)}</p>`;
        document.querySelector('#a3').value = "";
        document.querySelector('#b3').value = "";
        document.querySelector('#c3').value = "";
    }
    else if (a != 0 && b == 0) {
        const x = Math.sqrt(-c / a);
        if (x == 0) {
            document.querySelector('#output3').innerHTML = `<p class="text-success">x = ${x}</p>`;
            document.querySelector('#a3').value = "";
            document.querySelector('#b3').value = "";
            document.querySelector('#c3').value = "";
        }
        else if (-c < 0 && a > 0) {
            document.querySelector('#output3').innerHTML = `<p class="text-warning">The equation is a contradiction in R: it has no solutions <br /> x = &#177; ${reduceFraction(Math.sqrt(c), Math.sqrt(a))}i in C</p>`;
            document.querySelector('#a3').value = "";
            document.querySelector('#b3').value = "";
            document.querySelector('#c3').value = "";
        }
        else if (-c > 0 && a < 0) {
            document.querySelector('#output3').innerHTML = `<p class="text-warning">The equation is a contradiction in R: it has no solutions <br /> x = &#177; ${reduceFraction(Math.sqrt(-c), Math.sqrt(-a))}i in C</p>`;
            document.querySelector('#a3').value = "";
            document.querySelector('#b3').value = "";
            document.querySelector('#c3').value = "";
        }
        else {
            if (-c < 0) {
                document.querySelector('#output').innerHTML = `<p class="text-success">x = &#177;${reduceFraction(-Math.sqrt(c), -Math.sqrt(-a))}</p>`;
                document.querySelector('#a').value = "";
                document.querySelector('#c').value = "";
            }
            else {
                document.querySelector('#output').innerHTML = `<p class="text-success">x = &#177;${reduceFraction(Math.sqrt(-c), Math.sqrt(a))}</p>`;
                document.querySelector('#a').value = "";
                document.querySelector('#c').value = "";
            }
        }
    }
    else if (D < 0) {
        document.querySelector('#output3').innerHTML = `<p class="text-warning">Discriminant(Δ) = ${D} < 0, The equation is a contradiction in R: it has no solutions <br /> x = ${reduceFraction(-b, 2 * a)}-${reduceFraction(Math.sqrt(-D), 2 * a)}i OR x = ${reduceFraction(-b, 2 * a)}+${reduceFraction(Math.sqrt(-D), 2 * a)}i in C</p>`;
        document.querySelector('#a3').value = "";
        document.querySelector('#b3').value = "";
        document.querySelector('#c3').value = "";
    }
    else if (D == 0) {
        document.querySelector('#output3').innerHTML = `<p class="text-success">Discriminant(Δ) = 0,  x = ${reduceFraction(-b - Math.sqrt(D), 2 * a)} (double solution)</p>`;
        document.querySelector('#a3').value = "";
        document.querySelector('#b3').value = "";
        document.querySelector('#c3').value = "";
    }
    else {
        document.querySelector('#output3').innerHTML = `<p class="text-success">Discriminant(Δ) = ${D} > 0,  x = ${reduceFraction(-b - Math.sqrt(D), 2 * a)} OR x = ${reduceFraction(-b + Math.sqrt(D), 2 * a)}</p>`;
        document.querySelector('#a3').value = "";
        document.querySelector('#b3').value = "";
        document.querySelector('#c3').value = "";
    }
});
