let string = "";
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            try {
                string = evalExpression(string);
                document.querySelector('input').value = string;
            } catch (error) {
                // Handle the error, e.g., display an error message
                console.error('Invalid expression');
            }
        } else if (e.target.innerHTML === 'C') {
            string = '';
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML === '←') {
           
            string = string.slice(0, -1);
            document.querySelector('input').value = string;
        }
        else {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});

function evalExpression(expr) {
    return new Function('return ' + expr)();
}
