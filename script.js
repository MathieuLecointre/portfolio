// --- 1. ANIMATION D'ENTRÉE AVEC GSAP ---
// On crée une timeline pour enchaîner les animations fluidement
const tl = gsap.timeline();

// Animation du statut système (descend et apparaît)
tl.from(".system-status", {
    y: -30,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
})
// Animation du Titre Glitch (effet d'élasticité)
.from(".glitch", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: "elastic.out(1, 0.5)"
}, "-=0.4") // Le "-=0.4" permet de faire démarrer cette animation un peu avant la fin de la précédente
// Animation du sous-titre (glisse depuis la gauche)
.from(".subtitle", {
    x: -50,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
}, "-=0.6")
// Animation de la boite du terminal (apparaît en fondu)
.from(".terminal-box", {
    opacity: 0,
    duration: 0.5
}, "-=0.4")
// Animation des boutons (apparaissent un par un avec un effet "stagger")
.from(".cyber-button", {
    y: 20,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2, // Délai entre chaque bouton
    ease: "back.out(1.7)",
    onComplete: startTypewriter // Lance la machine à écrire à la toute fin
}, "-=0.2");


// --- 2. EFFET MACHINE À ÉCRIRE (Ton bug d'impatience) ---
const textToType = "> AVERTISSEMENT : Niveau d'impatience élevé. J'aime concevoir des sites web innovants et voir le code prendre vie sans attendre.";
const typeWriterElement = document.getElementById('typewriter');
let i = 0;

function startTypewriter() {
    if (i < textToType.length) {
        typeWriterElement.innerHTML += textToType.charAt(i);
        i++;
        setTimeout(startTypewriter, 40); // Vitesse de frappe (40ms)
    }
}