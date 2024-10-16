let randomNumber = Math.floor(Math.random() * 101); // Genera un número aleatorio entre 0 y 100

function submitGuess() {
    const userGuess = document.getElementById("guessInput").value;
    const response = document.getElementById("response");

    if (userGuess === "") {
        response.textContent = "Por favor, introduce un número válido.";
        return;
    }

    const guess = parseInt(userGuess);

    if (guess < randomNumber) {
        response.textContent = "¡Demasiado bajo! Intenta con un número más grande.";
    } else if (guess > randomNumber) {
        response.textContent = "¡Te pasaste! Prueba con un número más pequeño.";
    } else {
        response.textContent = "¡Felicidades! Has adivinado el número secreto.";
    }
}

function generateRandomNumber() {
    randomNumber = Math.floor(Math.random() * 101);
    document.getElementById("response").textContent = "";
    document.getElementById("guessInput").value = "";
    document.getElementById("secretDisplay").style.display = "none";
}

function showSecret() {
    const secretDisplay = document.getElementById("secretDisplay");
    secretDisplay.textContent = `El número secreto es: ${randomNumber}`;
    secretDisplay.style.display = "block";
}
