const contenu = {
  chapitre1: {
    texte: "Voici l'histoire du chapitre 1, qui parle des bases...",
    numero: "Chapitre 1",
    image: "imageChapitre1.jpg", 
    arrierePlan: "arriere1.jpg"
  },
  chapitre2: {
    texte: "Voici l'histoire du chapitre 2, qui parle des concepts avancés...",
    numero: "Chapitre 2",
    image: "imageChapitre2.jpg", 
    arrierePlan: "arriere2.jpg"
  },
  chapitre3: {
    texte: "Voici l'histoire du chapitre 3, qui parle des techniques intermédiaires...",
    numero: "Chapitre 3",
    image: "imageChapitre3.jpg", 
    arrierePlan: "arriere3.jpg"
  },
  chapitre4: {
    texte: "Voici l'histoire du chapitre 4, qui parle des stratégies avancées...",
    numero: "Chapitre 4",
    image: "imageChapitre4.jpg", 
    arrierePlan: "arriere4.jpg"
  },
  chapitre5: {
    texte: "Voici l'histoire du chapitre 5, qui parle des projets concrets...",
    numero: "Chapitre 5",
    image: "imageChapitre5.jpg", 
    arrierePlan: "arriere5.jpg"
  }
};

function ouvrirChapitre(chapitre) {
  // Masquer le sommaire
  document.getElementById('sommaire').style.display = 'none';
  
  // Afficher le contenu du chapitre
  const chapitreData = contenu[chapitre];
  const chapitreElement = document.getElementById('contenuChapitre' + chapitre.charAt(chapitre.length - 1)); // Dynamique : Chapitre 1, 2, 3...
  
  chapitreElement.style.display = 'block';
  chapitreElement.style.backgroundImage = 'url(' + chapitreData.arrierePlan + ')'; // Appliquer l'arrière-plan
  chapitreElement.querySelector('#numeroChapitre').textContent = chapitreData.numero;
  chapitreElement.querySelector('#histoire').textContent = chapitreData.texte;
  chapitreElement.querySelector('.imageChapitre').src = chapitreData.image; // Appliquer l'image
}

function fermerChapitre() {
  // Fermer le chapitre et revenir au sommaire
  document.getElementById('sommaire').style.display = 'block';
  document.querySelectorAll('.chapitre').forEach(chapitre => chapitre.style.display = 'none');
}

