// You can add JavaScript functionality here if needed
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.querySelector('#email').value;
        alert(`Thank you for signing up, ${email}!`);
        form.reset();
    });
});

