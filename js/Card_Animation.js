let cardContainer = document.getElementById('.cardContainer')

function zoomIn(item) {
    item.animate([
        /*keyframes*/
        {transform: 'scale(1) rotate(0deg)', offset: 0 },
        {transform: 'scale(1.1) rotate(-7deg)', offset: 0.2 },
        {transform: 'scale(1.2) rotate(0deg)', offset: 0.4 },
        {transform: 'scale(1.3) rotate(7deg)', offset: 0.6 },
        {transform: 'scale(1.4) rotate(0deg)', offset: 0.8 },
        {transform: 'scale(1.5) rotate(-4deg)', offset: 1 }
    
    ], {
        /*options*/
        duration: 2000,
        easing: 'ease-in-out',
        fill: 'forwards'
    
    
    });
}

/*Simply reversed the keyframes verbatim!!*/
function zoomOut(item) {
    item.animate([
        /*keyframes*/
        {transform: 'scale(1.5) rotate(10)', offset: 0 },
        {transform: 'scale(1)', offset: 1 }
    ], {
        /*options*/
        duration: 1000,
        easing: 'ease-in-out',
        fill: 'forwards'
    });
}



cardContainer.addEventListener("mouseenter", function() {
    zoomIn(cardContainer)
    zoomIn(cardVideo)
});



cardContainer.addEventListener("mouseleave", function() {
    zoomOut(cardContainer)
    zoomOut(cardVideo)
});