let showText = function(target, message, index, interval) {
    if (index < message.length) {
        document.querySelector(target).textContent += message[index++];

        setTimeout(function() {
            showText(target, message, index, interval);
        }, interval);
    }
}
showText("#msg", "Welcome to my page. My name is Fred Hong :)\nYou will be redirected in 3 secsonds ...", 0, 20);