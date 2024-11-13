const container = document.getElementById('container'); // select the container element

for (let i = 0; i < 256; i++) {
    const square = document.createElement('div'); // new div every loop
    square.classList.add('square'); // add css class to the div created
    container.appendChild(square); // add square div inside container div
}
