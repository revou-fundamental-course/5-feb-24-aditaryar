function konversi(type) {
    let inputValue;
    let resultValue;
    let placeholder;
    const inputElement = document.getElementById('kalkulasi');

    if (type === 'Celsius') {
        inputValue = parseFloat(document.getElementById("celsius").value);
        resultValue = (inputValue * 9/5) + 32;
        document.getElementById("fahrenheit").value = formatTemperature(resultValue);
        displayResult(resultValue, 'F');
        placeholder = `${inputValue}°C * (9/5) + 32 = ${resultValue}°F`;
    } else if (type === 'Fahrenheit') {
        inputValue = parseFloat(document.getElementById("fahrenheit").value);
        resultValue = (inputValue - 32) * 5/9;
        document.getElementById("celsius").value = formatTemperature(resultValue);
        displayResult(resultValue, 'C');
        placeholder = `${inputValue}°F - 32 * (5/9) = ${resultValue}°C`;
    }

    // Set the placeholder for the disabled input field
    inputElement.setAttribute('placeholder', placeholder);
}

function displayResult(result, type) {
    let resultElement = document.getElementById("result");
    resultElement.innerHTML = "Hasil Konversi: " + result.toFixed(2) + "°" + type;
}

function formatTemperature(value) {
    return Number.isInteger(value) ? value.toFixed(0) : value.toFixed(2);
}

function reverse() {
    let form1 = document.getElementById('form1');
    let form2 = document.getElementById('form2');

    let note1 = document.getElementById('note1');
    let note2 = document.getElementById('note2');

    form1.classList.toggle('form');
    form2.classList.toggle('form');

    note1.classList.toggle('note');
    note2.classList.toggle('note');
}