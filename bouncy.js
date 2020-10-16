let bouncyButton = document.getElementById('githubButton');
let linkedinButton = document.getElementById('linkedinButton');

function bounce(item) {
    item.animate([
        /*keyframes*/
        {transform: 'translateY(0)'},
        {transform: 'translateY(-6vh)'},
        {transform: 'translateY(0)'},
        {transform: 'translateY(-4vh)'},
        {transform: 'translateY(0vh)'},
        {transform: 'translateY(-2vh)'},
        {transform: 'translateY(0vh)'},
        {transform: 'rotate(15deg)'},
        {transform: 'rotate(15deg)'},
        {transform: 'rotate(15deg)'},
        {transform: 'rotate(-15deg)'},
        {transform: 'rotate(-15deg)'},
        {transform: 'rotate(-15deg)'},
        {transform: 'rotate(-15deg)'},
        {transform: 'rotate(0deg)'}
    ], {
        /*options*/
        duration: 2000,
        fill: 'forwards'
    });
}

bouncyButton.addEventListener("mouseenter", function() {
    bounce(bouncyButton)
});
linkedinButton.addEventListener("mouseenter", function() {
    bounce(linkedinButton)
});