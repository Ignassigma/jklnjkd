document.addEventListener('DOMContentLoaded', function() {
    const button = document.createElement('button');
    button.textContent = 'Click me to disappear!';
    button.addEventListener('click', function() {
        this.style.display = 'none';
    });
    document.body.appendChild(button);
});