const pianokeys = document.querySelectorAll('.piano-keys .key'),
    volumeslider = document.querySelector('.volume-slider input'),
    keyscheckbox = document.querySelector('.keys-checkbox input');

let allkeys = [],
    audio = new Audio('a.wav')

const playtune = (key) => {
    audio.src = `${key}.wav`
    audio.play();

    const clickedkey = document.querySelector(`[data-key = "${key}"]`);
    clickedkey.classList.add("active");
    setTimeout(() => {
        clickedkey.classList.remove("active");
    }, 150)
}
pianokeys.forEach(key => {

    allkeys.push(key.dataset.key)


    key.addEventListener('click', () => playtune(key.dataset.key));

});
const handlevolume = (e) => {
    audio.volume = e.target.value
}

const showhidekeys = () => {
    pianokeys.forEach(key => key.classList.toggle("hide"));
}


const pressedkey = (e) => {
    if (allkeys.includes(e.key)) playtune(e.key)
}

document.addEventListener("keydown", pressedkey);
volumeslider.addEventListener("input", handlevolume);
keyscheckbox.addEventListener("click", showhidekeys);