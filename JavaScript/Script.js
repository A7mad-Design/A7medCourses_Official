var Btn = document.getElementById("K") ;

window.onscroll = function () {


    'use strict';

    if (window.pageYOffset >= 20) {
        Btn.style.display = 'block';
    } else {
        Btn.style.display = 'none' ;
    }
};


Btn .onclick = function() {
    window.scrollTo(0,0)
}