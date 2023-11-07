function determineNumber() {
    console.log("numberValue");
    let number = parseFloat(elementNumber.innerText);
    if (number > 0) {
        result = "Число положительное";
    } else if (number < 0) {
        result = "Число отрицательное";
    } else {
        result = "Число равно нулю";
    }
    document.getElementById("result").innerText = result;
}

const elementNumber = document.getElementById("number");
const elementDetermine = document.getElementById("determine");

elementDetermine.addEventListener("click", determineNumber);
