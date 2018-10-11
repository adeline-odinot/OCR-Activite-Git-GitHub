function random() {
    
    // Initialisation des différentes var utile pour le bon fonctionnement de la fonction random.
    var randomNumber = Math.round(Math.random() * 300 ) + 1;
    var txtRandomNumber = document.getElementById("random-number");
    var parity = document.getElementById("parity");
    
    // Un affichage du texte comportant le nombre aléatoire se met en place
    txtRandomNumber.textContent = "Numéro aléatoire : " + randomNumber;
    
    // Texte affichant si un chiffre est pair ou impair se mettant en place selon sa condition.
    if (randomNumber % 2 === 0) {
        parity.textContent = randomNumber + " est un chiffre pair";
    }
    else {
        parity.textContent = randomNumber + " est un chiffre impair";
    }
}

// Appel de la fonction random
random();