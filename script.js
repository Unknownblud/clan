// Attente du clic sur l'écran d'entrée
document.getElementById('entry-screen').addEventListener('click', function() {
    // Masquer l'écran d'entrée
    document.getElementById('entry-screen').style.display = 'none';
    
    // Afficher le sommaire avec une transition d'opacité
    let sommaire = document.getElementById('sommaire');
    sommaire.classList.remove('hidden');
    setTimeout(function() {
        sommaire.style.opacity = 1; // Affichage du sommaire
    }, 10); // Petits délais pour activer l'animation d'opacité
});
