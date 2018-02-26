var main = document.getElementById('main');
var bg1 = document.getElementById('bg1');
var bg2 = document.getElementById('bg2');
var bg3 = document.getElementById('bg3');
var bg4 = document.getElementById('bg4');

var pic1 = document.getElementById('pic1');
var pic2 = document.getElementById('pic2');
var pic3 = document.getElementById('pic3');
var mtitle = document.getElementById('mtitle');

bg1.addEventListener('click', function(){
    main.style.display = 'block';
    mtitle.innerHTML = 'Head Gear';
    pic1.src = 'imgs/gears/h1.png';
    pic2.src = 'imgs/gears/h2.png';
    pic3.src = 'imgs/gears/h3.png';
});

bg2.addEventListener('click', function(){
    main.style.display = 'block';
    mtitle.innerHTML = 'Body Gear';
    pic1.src = 'imgs/gears/b1.png';
    pic2.src = 'imgs/gears/b2.png';
    pic3.src = 'imgs/gears/b3.png';
});

bg3.addEventListener('click', function(){
    main.style.display = 'block';
    mtitle.innerHTML = 'Leg Gear';
    pic1.src = 'imgs/gears/l1.png';
    pic2.src = 'imgs/gears/l2.png';
    pic3.src = 'imgs/gears/l3.png';
});

bg4.addEventListener('click', function(){
    main.style.display = 'block';
    mtitle.innerHTML = 'Foot Gear';
    pic1.src = 'imgs/gears/f1.png';
    pic2.src = 'imgs/gears/f2.png';
    pic3.src = 'imgs/gears/f3.png';
});
