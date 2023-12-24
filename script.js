document.getElementById('revealButton').addEventListener('click', function() {
    var firstMessage = document.getElementById('firstMessage');
    var secondMessage = document.getElementById('secondMessage');
    var button = document.getElementById('revealButton');

    // Check which message is currently shown
    if (firstMessage.classList.contains('hidden') && secondMessage.classList.contains('hidden')) {
        // If no message is shown, show the first message
        firstMessage.classList.remove('hidden');
        button.textContent = 'Click me again!';
    } else if (!firstMessage.classList.contains('hidden')) {
        // If the first message is shown, hide it and show the second message
        firstMessage.classList.add('hidden');
        secondMessage.classList.remove('hidden');
    } else {
        // If the second message is shown, do nothing or hide the second message
        secondMessage.classList.add('hidden');
        button.textContent = 'Click me!';
    }
});
