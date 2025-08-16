const input = document.querySelector('.input');
const buttons = document.querySelectorAll('.button');

let expression = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerText;

        switch (value) {
            case '=':
                try {
                    expression = expression.replace(/%/g, '/100');
                    const result = eval(expression);
                    input.value = result;
                    expression = result.toString();
                } catch (err) {
                    input.value = "Error";
                    expression = "";
                }
                break;

            case 'Clr':
                expression = "";
                input.value = "";
                break;

            default:
                if (value === '.' && expression.includes('.')) {
                    return;
                }
                if (value === '0' && expression === '0') {
                    return;
                }
                expression += value;
                input.value = expression;
        }
    });
});