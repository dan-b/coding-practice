var delayMs = 500;

function printMessage (message) {
    setTimeout( function () {
        console.log(message);
    }, delayMs);
}

printMessage('Function called ' + delayMs + "ms ago");