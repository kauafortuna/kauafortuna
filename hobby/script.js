/* filepath: c:\Users\w7for\OneDrive\Área de Trabalho\Meus_Projetos_Dev\hobby\script.js */
const button = document.getElementById('ButtonLove');

button.addEventListener('mouseover', () => {
    const x = Math.floor(Math.random() * (window.innerWidth - button.clientWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - button.clientHeight));
    button.style.position = 'absolute';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
});

const redirectButton = document.getElementById('redirectButton');
redirectButton.addEventListener('click', () => {
    window.location.href = 'casamento.html';
});