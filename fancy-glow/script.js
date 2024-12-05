const audio = document.querySelector("audio");
const glowContainer = document.querySelector(".fancy-glow");
const text = document.querySelector("em");

glowContainer.addEventListener("click", () => {
    if (audio.paused) {
        audio.currentTime = 0;
        audio.play();
        text.textContent =
            "You are just a chill guy who appreciates the little things in life.";
    } else {
        audio.pause();
        text.textContent = "You used to be a chill guy. What happened?";
    }
});
