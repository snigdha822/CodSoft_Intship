document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('[name="display"]');
    const buttons = document.querySelectorAll('input[type="button"]');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = button.value;

            if (value === 'C') {

                display.value = '';
            } else if (value === 'DE') {
                
                display.value = display.value.slice(0, -1);
            } else if (value === '=') {
                try {
                    
                    display.value = eval(display.value);
                } catch (error) {
                    
                    display.value = 'Error';
                }
            } else {
                
                display.value += value;
            }
        });
    });
});
