function konversi() {
    let celsiusValue = parseFloat(document.getElementById("celsius").value);
    let fahrenheitValue = (celsiusValue * 9/5) + 32;

    document.getElementById("fahrenheit").value = formatTemperature(fahrenheitValue);

    displayResult(fahrenheitValue, 'F');
}

function konversi2() {
    let fahrenheitValue = parseFloat(document.getElementById("fahrenheit").value);
    let celsiusValue = (fahrenheitValue - 32) * 5/9;

    document.getElementById("celsius").value = formatTemperature(celsiusValue);

    displayResult(celsiusValue, 'C');
}

function reset() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("result").innerHTML = "";
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

    form1.classList.toggle('active');
    form2.classList.toggle('active');
}