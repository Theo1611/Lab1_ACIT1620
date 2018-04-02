/*============DO NOT TOUCH THESE======================*/
var hair = document.getElementById("hair"),
    eyes = document.getElementById("eyes"),
    nose = document.getElementById("nose"),
    mouth = document.getElementById("mouth"),
    h = 1,
    e = 1,
    n = 1,
    m = 1;

hair.style.width = "60%";
hair.style.top = "0%";
eyes.style.width = "20%";
eyes.style.top = "40%";
nose.style.width = "20%";
nose.style.top = "55%";
mouth.style.width = "20%";
mouth.style.top = "75%";

/*==================YOUR WORK STARTS BELOW=====================*/

hair.addEventListener('click', function() {
    hair.src = 'img/hair'+(h++)+'.png'
    if (h > 3) {h = 1}
});

eyes.addEventListener('click', function() {
    eyes.src = 'img/eyes'+(e++)+'.png'
    if (e > 3) {e = 1}
});

nose.addEventListener('click', function() {
    nose.src = 'img/nose'+(n++)+'.png'
    if (n > 3) {n = 1}
});

mouth.addEventListener('click', function() {
    mouth.src = 'img/mouth'+(m++)+'.png'
    if (m > 3) {m = 1}
});