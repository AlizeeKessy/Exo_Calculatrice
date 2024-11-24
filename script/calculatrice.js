function resetValue() {
    document.calc.display.value = '0';
}

function addValue(value) {
    if (document.calc.display.value == 0) {
        document.calc.display.value = value;
    }
    else {
        document.calc.display.value += value;   
    }
}

function calculate () {
    //la valeur qui apparaitra sur notre écran sera calculer via la fonction "eval" de JS
    document.calc.display.value = eval(calc.display.value);

}