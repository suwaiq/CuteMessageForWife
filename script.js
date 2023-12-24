document.getElementById('revealButton').addEventListener('click', function() {
    var secretMessage = document.getElementById('secretMessage');
    if (secretMessage.classList.contains('hidden')) {
        secretMessage.classList.remove('hidden');
        setTimeout(function() {
            secretMessage.style.opacity = 1;
        }, 10); // Delay for CSS transition
    } else {
        secretMessage.style.opacity = 0;
        setTimeout(function() {
            secretMessage.classList.add('hidden');
        }, 500); // Match the duration of the opacity transition
    }
});
