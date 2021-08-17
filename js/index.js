let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;

            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
}
const cButtomColor = document.getElementById('diffColor');
cButtomColor.style.backgroundColor = '#e8464b';
const equalButtomColor = document.getElementById('equal-color');
equalButtomColor.style.backgroundColor = '#e475e6';