const range = document.getElementById("range");

range.addEventListener('input', (e) => {
    const value = +e.target.value; // + converts to number
    const label = e.target.nextElementSibling;
    label.innerHTML = value;

    const range_width = getComputedStyle(e.target).getPropertyValue('width');
    const label_width = getComputedStyle(label).getPropertyValue('width');

    const num_width = +range_width.substring(0, range_width.length - 2); // removes "px" from the css values
    const num_label_width = +label_width.substring(0, label_width.length - 2); // removes "px" from the css values

    const max = +e.target.max;
    const min = +e.target.min;

    const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10);

    label.style.left = `${left}px`;

    label.innerHTML = value;

});

// This one gets from stackoverflow when searching "map a range of numbers with another range of numbers"
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

// I don't really like this copy and paste solution, but what you gonna do? Coding is coding - fall in or fall out.