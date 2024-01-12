let text = document.getElementById("text");
let hill_left = document.getElementById("hill-left");
let hill_right = document.getElementById("hill-right");
let base = document.getElementById("base");

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    if (value >= 300) {
        text.style.marginTop = '800px';
        text.style.opacity = '0';
    } else {
        text.style.marginTop = value * 2 + 'px';
        text.style.opacity = 1 - value / 400;
    }

    hill_left.style.left = value * -0.5 + 'px';
    hill_right.style.left = value * 0.5 + 'px';

    // base.style.bottom = value * 1.5 + 'px';
    // base.style.zIndex = value * 0.3 + 20;
});