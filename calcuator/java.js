//Define varibles to store the calcuator display and buttons
let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
//initialize varibles to store calculation data
let screenValue = '';
for (item of buttons) {
    // Event listener for button click and to perform calculation
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

