document.addEventListener("keydown", () => {
    const message = document.getElementById("message");
    const sommaire = document.getElementById("sommaire");

    // Cache le message initial
    message.classList.add("hidden");

    // Affiche et anime le sommaire
    sommaire.style.display = "block";
    setTimeout(() => {
        sommaire.style.opacity = "1";
        sommaire.style.transform = "translateY(0)";
    }, 100); // Délai pour une transition fluide
});
