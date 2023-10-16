// script.js
document.addEventListener("DOMContentLoaded", function () {
    const inputTemp = document.getElementById("inputTemp");
    const unitSelect = document.getElementById("unitSelect");
    const convertButton = document.getElementById("convertButton");
    const resultDiv = document.getElementById("result");

    convertButton.addEventListener("click", function () {
        const temperature = parseFloat(inputTemp.value);
        const unit = unitSelect.value;
        let convertedTemperature;

        if (isNaN(temperature)) {
            resultDiv.textContent = "Please enter a valid number.";
            return;
        }

        if (unit === "celsius") {
            // Conversion from Celsius to Fahrenheit
            convertedTemperature = (temperature * 9/5) + 32;
        } else if (unit === "fahrenheit") {
            // Conversion from Fahrenheit to Celsius
            convertedTemperature = (temperature - 32) * 5/9;
        } else {
            //Conversion from temprature to kelvin
            convertedTemperature = temperature + 273.15;
        }
        resultDiv.style.display = "block";
        inputTemp.value = "";
        unitSelect.value = "fahrenheit";
        resultDiv.textContent = `${convertedTemperature.toFixed(2)} ${unit}`;
    });
});
