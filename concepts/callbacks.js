var form = new Object();

// this is messy
form.onClick = function (clickEvent) {
    asyncReq(
        {event: clickEvent},
        function (err, res, body) {}
    );
}

// name anonymous functions
function btnClick (clickEvent) {
    asyncReq(
        {event: clickEvent},
        processRes
    );
}

function processRes (err, res, body) {}

form.onClick = btnClick;

// modularize
module.exports.click = bntClick;
// move to separate .js file - click.js
var clickHandler = require('click');
form.onClick = clickHandler.click;
