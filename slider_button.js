let buttonLeft = document.getElementById('button_Left')
let button1 = document.getElementById('button_1')
let button2 = document.getElementById('button_2')
let button3 = document.getElementById('button_3')
let button4 = document.getElementById('button_4')
let buttonRight = document.getElementById('button_Right')

function glow(item) {
    item.animate([
        /*keyframes*/
        {boxShadow: '0 0px 25px 0px rgb(180, 0, 80, .9)'}
    ], {
        /*options*/
        duration: 200,
        easing: 'ease-in',
        fill: 'forwards'
    });
}function unglow(item) {
    item.animate([
        /*keyframes*/
        {boxShadow: 'inherit'}
    ], {
        /*options*/
        duration: 200,
        easing: 'ease-in',
        fill: 'forwards'
    });
}

buttonLeft.addEventListener("mouseenter", function() {
    glow(buttonLeft)
});button1.addEventListener("mouseenter", function() {
    glow(button1)
});button2.addEventListener("mouseenter", function() {
    glow(button2)
});button3.addEventListener("mouseenter", function() {
    glow(button3)
});button4.addEventListener("mouseenter", function() {
    glow(button4)
});buttonRight.addEventListener("mouseenter", function() {
    glow(buttonRight)
});

buttonLeft.addEventListener("mouseout", function() {
    unglow(buttonLeft)
});button1.addEventListener("mouseout", function() {
    unglow(button1)
});button2.addEventListener("mouseout", function() {
    unglow(button2)
});button3.addEventListener("mouseout", function() {
    unglow(button3)
});button4.addEventListener("mouseout", function() {
    unglow(button4)
});buttonRight.addEventListener("mouseout", function() {
    unglow(buttonRight)
});