var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');
var c4 = document.getElementById('c4');

var head = document.getElementById('img1');
var body = document.getElementById('img2');
var leg = document.getElementById('img3');
var foot = document.getElementById('img4');

var prev = document.getElementById('Prev');
var next = document.getElementById('Next');

var textbox = document.getElementById('textbox');

prev.addEventListener('click', function(){
    if (c1.checked) {
        if (head.getAttribute('src') == 'imgs/gears/h1.png'){
            head.src = 'imgs/gears/h3.png';
        } else if (head.getAttribute('src') == 'imgs/gears/h3.png'){
            head.src = 'imgs/gears/h2.png';
        } else if (head.getAttribute('src') == 'imgs/gears/h2.png'){
            head.src = 'imgs/gears/h1.png';
        }
    }
    else if (c2.checked) {
        if (body.getAttribute('src') == 'imgs/gears/b1.png'){
            body.src = 'imgs/gears/b3.png';
        } else if (body.getAttribute('src') == 'imgs/gears/b3.png'){
            body.src = 'imgs/gears/b2.png';
        } else if (body.getAttribute('src') == 'imgs/gears/b2.png'){
            body.src = 'imgs/gears/b1.png';
        }
    }
    else if (c3.checked) {
        if (leg.getAttribute('src') == 'imgs/gears/l1.png'){
            leg.src = 'imgs/gears/l3.png';
        } else if (leg.getAttribute('src') == 'imgs/gears/l3.png'){
            leg.src = 'imgs/gears/l2.png';
        } else if (leg.getAttribute('src') == 'imgs/gears/l2.png'){
            leg.src = 'imgs/gears/l1.png';
        }
    }
    else if (c4.checked) {
        if (foot.getAttribute('src') == 'imgs/gears/f1.png'){
            foot.src = 'imgs/gears/f3.png';
        } else if (foot.getAttribute('src') == 'imgs/gears/f3.png'){
            foot.src = 'imgs/gears/f2.png';
        } else if (foot.getAttribute('src') == 'imgs/gears/f2.png'){
            foot.src = 'imgs/gears/f1.png';
        }
    } else {
        alert('Choose an option')
    }
});

next.addEventListener('click', function(){
    if (c1.checked) {
        if (head.getAttribute('src') == 'imgs/gears/h1.png'){
            head.src = 'imgs/gears/h2.png';
        } else if (head.getAttribute('src') == 'imgs/gears/h2.png'){
            head.src = 'imgs/gears/h3.png';
        } else if (head.getAttribute('src') == 'imgs/gears/h3.png'){
            head.src = 'imgs/gears/h1.png';
        }
    }
    else if (c2.checked) {
        if (body.getAttribute('src') == 'imgs/gears/b1.png'){
            body.src = 'imgs/gears/b2.png';
        } else if (body.getAttribute('src') == 'imgs/gears/b2.png'){
            body.src = 'imgs/gears/b3.png';
        } else if (body.getAttribute('src') == 'imgs/gears/b3.png'){
            body.src = 'imgs/gears/b1.png';
        }
    }
    else if (c3.checked) {
        if (leg.getAttribute('src') == 'imgs/gears/l1.png'){
            leg.src = 'imgs/gears/l2.png';
        } else if (leg.getAttribute('src') == 'imgs/gears/l2.png'){
            leg.src = 'imgs/gears/l3.png';
        } else if (leg.getAttribute('src') == 'imgs/gears/l3.png'){
            leg.src = 'imgs/gears/l1.png';
        }
    }
    else if (c4.checked) {
        if (foot.getAttribute('src') == 'imgs/gears/f1.png'){
            foot.src = 'imgs/gears/f2.png';
        } else if (foot.getAttribute('src') == 'imgs/gears/f2.png'){
            foot.src = 'imgs/gears/f3.png';
        } else if (foot.getAttribute('src') == 'imgs/gears/f3.png'){
            foot.src = 'imgs/gears/f1.png';
        }
    } else {
        alert('Choose an option')
    }
});

textbox.addEventListener('keyup', function(ev){
    if (ev.keyCode == 13){
        if (textbox.value == 'combo1') {
            head.src = 'imgs/gears/h1.png';
            body.src = 'imgs/gears/b1.png';
            leg.src = 'imgs/gears/l1.png';
            foot.src = 'imgs/gears/f1.png';
        } else if (textbox.value == 'combo2') {
            head.src = 'imgs/gears/h2.png';
            body.src = 'imgs/gears/b2.png';
            leg.src = 'imgs/gears/l2.png';
            foot.src = 'imgs/gears/f2.png';
        } else if (textbox.value == 'combo3') {
            head.src = 'imgs/gears/h3.png';
            body.src = 'imgs/gears/b3.png';
            leg.src = 'imgs/gears/l3.png';
            foot.src = 'imgs/gears/f3.png';
        } else if (textbox.value == 'random') {
            head.src = 'imgs/gears/h' + (Math.floor(Math.random() * 3) + 1) + '.png';
            body.src = 'imgs/gears/b' + (Math.floor(Math.random() * 3) + 1) + '.png';
            leg.src = 'imgs/gears/l' + (Math.floor(Math.random() * 3) + 1) + '.png';
            foot.src = 'imgs/gears/f' + (Math.floor(Math.random() * 3) + 1) + '.png';
        }
    }
});