function doCalculation(choice) {
    let num1 =parseFloat(document.getElementsByName('firstNum')[0].value);
    let num2 = parseFloat(document.getElementsByName('secondNum')[0].value);

    switch(choice) {
        case '+':
            alert(num1 + num2);
            break;

        case '-':
            alert(num1 - num2);
            break;

        case '*':
            alert(num1 * num2);
            break;

        case '/':
            alert(num1 / num2);
            break;
    }
}