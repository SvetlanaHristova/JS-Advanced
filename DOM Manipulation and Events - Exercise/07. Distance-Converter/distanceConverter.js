function attachEventsListeners() {
    let inputElement = document.getElementById("inputDistance");
    let resultElement = document.getElementById("outputDistance");
    let inputOptionElement = document.getElementById("inputUnits");
    let outputOptionElement = document.getElementById("outputUnits");

    let convertToMeters = {
        'km': 1000,
        'm': 1,
        'cm': 0.01,
        'mm': 0.001,
        'mi': 1609.34,
        'yrd': 0.9144,
        'ft': 0.3048,
        'in': 0.0254,
    };
    document.getElementById("convert").addEventListener('click', () => {
        resultElement.value = Number(inputElement.value) * convertToMeters[inputOptionElement.value] / convertToMeters[outputOptionElement.value];
    })

}