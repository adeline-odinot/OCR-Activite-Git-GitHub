function random() {
    var randomNumber = Math.round(Math.random() * 300 ) + 1;

    var txtRandomNumber = document.getElementById("random-number");
    
    txtRandomNumber.textContent = "Numéro aléatoire : " + randomNumber;
    
    var parity = document.getElementById("parity");
    
    if (randomNumber % 2 === 0) {
        parity.textContent = randomNumber + " est un chiffre pair";
    }
    
    else {
        parity.textContent = randomNumber + " est un chiffre impair";
    }
}

random();