let button_Left = document.getElementById('button_Left');
let button_1 = document.getElementById('button_1');
let button_2 = document.getElementById('button_2');
let button_3 = document.getElementById('button_3');
let button_4 = document.getElementById('button_4');
let button_Right = document.getElementById('button_Right');
/**/
let transform_position = 0; /*slider starting point*/
let current_handle_location = 1; /*handle starting point*/
let last_handle_location = 1; /*see above line*/
/**/
let slider = document.getElementById('slider');
/**/
let toggle_speed = 1; /*TOGGLE*/

/*SLIDER ANIMATION*/
function sliderAnimation(item, percent, handle_location) {

    Boolean(toggle_speed)
        ? effect = Math.abs(handle_location-last_handle_location)
        : effect = 1;
    
    item.animate([
        /*keyframes*/
        {opacity: '.8'},
        {opacity: '0'},
        {opacity: '.2', transform: 'translate(' + percent + '%)'},
        {opacity: '1', transform: 'translate(' + percent + '%)'}
    ], {
        /*options*/
        duration: 1500*effect,
        easing: 'ease-in-out',
        fill: 'forwards'
    });

    last_handle_location = handle_location;

}

/*BUTTON ANIMATION*/
function buttonAnimation() {
    document.getElementById('button_' + last_handle_location + '').style.backgroundColor= 'transparent';
    document.getElementById('button_' + current_handle_location + '').style.backgroundColor= 'white';
    document.getElementById('button_' + last_handle_location + '').style.color= 'goldenrod';
    document.getElementById('button_' + current_handle_location + '').style.color= 'black'; 
}


/*BUTTON EFFECTS & ANIMATION*/
button_Left.onclick = function() {
    current_handle_location == 1 ? current_handle_location = 1 : current_handle_location = current_handle_location - 1;
    transform_position == 0 ? transform_position = 0 : transform_position = transform_position + 25;
    buttonAnimation(current_handle_location)
    sliderAnimation(slider, transform_position, current_handle_location)
}
button_1.onclick = function() {
    current_handle_location = 1;
    transform_position = 0;
    buttonAnimation(current_handle_location)
    sliderAnimation(slider, transform_position, current_handle_location)
}
button_2.onclick = function() {
    current_handle_location = 2;
    transform_position = -25;
    buttonAnimation(current_handle_location)
    sliderAnimation(slider, transform_position, current_handle_location)
}
button_3.onclick = function() {
    current_handle_location = 3;
    transform_position = -50;
    buttonAnimation(current_handle_location)
    sliderAnimation(slider, transform_position, current_handle_location) 
}
button_4.onclick = function() {
    current_handle_location = 4;
    transform_position = -75;
    buttonAnimation(current_handle_location)
    sliderAnimation(slider, transform_position, current_handle_location)
}
button_Right.onclick = function() {
    current_handle_location == 4 ? current_handle_location = 4 : current_handle_location = current_handle_location + 1;
    transform_position == -75 ? transform_position = -75 : transform_position = transform_position - 25;
    buttonAnimation(current_handle_location)
    sliderAnimation(slider, transform_position, current_handle_location)
}