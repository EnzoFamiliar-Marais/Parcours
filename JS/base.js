document.addEventListener('DOMContentLoaded', () => {
    let boutonsNav = document.getElementsByClassName('nav');

    for (let i = 0; i < boutonsNav.length; i++) {
        ajouterEcouteurs(boutonsNav[i]);
    }
});

function ajouterEcouteurs(bouton) {
    bouton.style.transition = 'background-color 0.5s ease';

    bouton.onclick = () => { 
        bouton.style.backgroundColor = '';
    };

    bouton.onmouseover = () => {
        bouton.style.backgroundColor = 'blue';
        bouton.style.boxShadow = '0 0 5px rgba(255, 255, 255, 0.3)';
    };

    bouton.onmouseout = () => {
        bouton.style.backgroundColor = '';
        bouton.style.boxShadow = '';
    };
}
