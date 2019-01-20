/*
*   SHOTA Portfolio
*   Copyright (c) 2017 Shota Shimazu
*/

//
// ScrollReveal.js
// 
window.sr = ScrollReveal();
sr.reveal('.ss-animate');


//
//  jQuery Toast
//

$.toast({ 
    text : "Welcome to SHOTA portfolio site.", 
    showHideTransition : 'slide',
    bgColor : '#4FC1E9',
    textColor : '#eee',
    allowToastClose : false,
    hideAfter : 5000,
    stack : 5,
    loaderBg: '#FF3979',
    textAlign : 'left',
    position : 'bottom-left'
});

$.toast({ 
    text : "This web site is now under construction.", 
    showHideTransition : 'slide',
    bgColor : '#4FC1E9',
    textColor : '#eee',
    allowToastClose : false,
    hideAfter : 10000,
    stack : 10,
    loaderBg: '#FF3979',
    textAlign : 'left',
    position : 'bottom-left'
});
