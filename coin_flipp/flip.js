let userChoice = null;

function setChoice(choice) {
    userChoice = choice;
    document.getElementById("selectedChoice").innerText = "Your Choice: " + choice;
}

function flipCoin() {
    if (!userChoice) {
        alert("Please select Heads or Tails first!");
        return;
    }

    const coin = document.getElementById("coin");
    const coinImg = document.getElementById("coinImg");
    const resultMessage = document.getElementById("resultMessage");

    // Generate a truly unpredictable result
    let randomnessFactor = (Math.random() + Math.random() + Math.random() + Math.random()) / 4;
    let isHeads = randomnessFactor > 0.5;
    let finalResult = isHeads ? "Heads" : "Tails";

    // Random spin effect
    let randomSpins = Math.floor(Math.random() * 5) + 3; // 3 to 7 full spins
    let direction = Math.random() < 0.5 ? 1 : -1; // Random direction
    let finalRotation = randomSpins * 360 * direction;

    // Apply spinning animation
    coin.style.transition = "transform 1.5s ease-out";
    coin.style.transform = `rotateY(${finalRotation}deg)`;

    setTimeout(() => {
        coin.style.transition = ""; // Reset transition for next flip
        coin.style.transform = "rotateY(0deg)";

        // Set the final image
        coinImg.src = isHeads ? "heads.png" : "tails.png";

        // Display result
        if (finalResult === userChoice) {
            resultMessage.innerText = "You Won! 🎉";
            resultMessage.style.color = "green";
        } else {
            resultMessage.innerText = "You Lost! 😞";
            resultMessage.style.color = "red";
        }
    }, 1500); // Match animation duration
}
