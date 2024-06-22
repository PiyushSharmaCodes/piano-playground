function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const keys = document.querySelectorAll(".key, .black-key");

keys.forEach(key => {
    key.addEventListener("click", () => {
        key.style.backgroundColor = getRandomColor();

        const soundId = key.getAttribute("data-sound").split('.')[0];
        const sound = document.getElementById(soundId);
        sound.currentTime = 0; 
        sound.play();
    });
});
document.body.firstElementChild.style.color=getRandomColor();
document.body.style.backgroundColor=getRandomColor();