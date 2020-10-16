let slider = document.getElementById('slider');
let handle = document.getElementById('handle');
/**/
let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let box4 = document.getElementById('box4');
/**/
let buttonLeft = document.getElementById('buttonLeft');
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let button4 = document.getElementById('button4');
let buttonRight = document.getElementById('buttonRight');
/**/
let transform_position = 0; /*slider starting point*/
let current_handle_location = 1; /*handle starting point*/
let last_handle_location = 1; /*see above line*/
/**/
let slider2 = document.getElementById('slider2');
let slider3 = document.getElementById('slider3');
/**/
let toggle_speed = 1; /*TOGGLE*/

                                                            /*BOTH WORK, BUT NOT SIMULTANEOUSLY!*/
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

/*SLIDER2 ANIMATION*/
function slider2Animation(item, percent, handle_location) {

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

/*SLIDER3 ANIMATION*/
function slider3Animation(item, percent, handle_location) {

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
    document.getElementById('button' + last_handle_location + '').style.backgroundColor= 'transparent';
    document.getElementById('button' + current_handle_location + '').style.backgroundColor= 'white';
    document.getElementById('button' + last_handle_location + '').style.color= 'white';
    document.getElementById('button' + current_handle_location + '').style.color= 'black'; 
}

/*SCROLLBAR EFFECTS & ANIMATION*/
box1.onclick = function() {
    current_handle_location = 1;
    sliderAnimation(slider, 0, current_handle_location)
    sliderAnimation(slider2, 0, current_handle_location)
    handle.style.top = '0px'; /* wrt slider height*/
}
box2.onclick = function() {
    current_handle_location = 2;
    sliderAnimation(slider, -25, current_handle_location)
    sliderAnimation(slider2, -25, current_handle_location)
    handle.style.top = '80px';
}
box3.onclick = function() {
    current_handle_location = 3;
    sliderAnimation(slider, -50, current_handle_location)
    sliderAnimation(slider2, -50, current_handle_location)
    handle.style.top = '160px';
}
box4.onclick = function() {
    current_handle_location = 4;
    sliderAnimation(slider, -75, current_handle_location)
    sliderAnimation(slider2, -75, current_handle_location)
    handle.style.top = '240px';
}

/*BUTTON EFFECTS & ANIMATION*/
buttonLeft.onclick = function() {
    current_handle_location == 1 ? current_handle_location = 1 : current_handle_location = current_handle_location - 1;
    transform_position == 0 ? transform_position = 0 : transform_position = transform_position + 25;
    buttonAnimation(current_handle_location)
    //sliderAnimation(slider, transform_position, current_handle_location)
    //slider2Animation(slider2, transform_position, current_handle_location)
    slider3Animation(slider3, transform_position, current_handle_location)
}
button1.onclick = function() {
    current_handle_location = 1;
    transform_position = 0;
    buttonAnimation(current_handle_location)
    //sliderAnimation(slider, transform_position, current_handle_location)
    //slider2Animation(slider2, transform_position, current_handle_location)
    slider3Animation(slider3, transform_position, current_handle_location)
}
button2.onclick = function() {
    current_handle_location = 2;
    transform_position = -25;
    buttonAnimation(current_handle_location)
    //sliderAnimation(slider, transform_position, current_handle_location)
    //slider2Animation(slider2, transform_position, current_handle_location)
    slider3Animation(slider3, transform_position, current_handle_location)
}
button3.onclick = function() {
    current_handle_location = 3;
    transform_position = -50;
    buttonAnimation(current_handle_location)
    //sliderAnimation(slider, transform_position, current_handle_location) 
    //slider2Animation(slider2, transform_position, current_handle_location) 
    slider3Animation(slider3, transform_position, current_handle_location) 
}
button4.onclick = function() {
    current_handle_location = 4;
    transform_position = -75;
    buttonAnimation(current_handle_location)
    //sliderAnimation(slider, transform_position, current_handle_location)
    //slider2Animation(slider2, transform_position, current_handle_location)
    slider3Animation(slider3, transform_position, current_handle_location)
}
buttonRight.onclick = function() {
    current_handle_location == 4 ? current_handle_location = 4 : current_handle_location = current_handle_location + 1;
    transform_position == -75 ? transform_position = -75 : transform_position = transform_position - 25;
    buttonAnimation(current_handle_location)
    //sliderAnimation(slider, transform_position, current_handle_location)
    //slider2Animation(slider2, transform_position, current_handle_location)
    slider3Animation(slider3, transform_position, current_handle_location)
}

/*CURRENT HTML VERSION CANT HANDLE MULTIPLE ANIMATIONS THIS WAY:
        - SEPARATE FUNCTION CALLS ACROSS TWO DIVs
        - CAN'T JUST DUPLICATE VARIABLE NAMES EITHER*/

                                                                        /*FINAL COPY*/