var avatar = document.getElementById('img1');
var menu = document.getElementById('menu');
var vertical = 0;
var centerdiv = document.getElementById('center');
var horizontal = 0;
var size = 100;

document.getElementById('ava1').addEventListener('click', function() {
    avatar.src = 'pics/ava1.png';
});

document.getElementById('ava2').addEventListener('click', function() {
    avatar.src = 'pics/ava2.png';
});

document.getElementById('menubutton').addEventListener('click', function() {
    menu.style.right = '0px';
});

document.getElementById('boxup').addEventListener('click', function() {
    vertical = vertical - 7;
    centerdiv.style.top = vertical + 'px';
});

document.getElementById('boxdown').addEventListener('click', function() {
    vertical = vertical + 7;
    centerdiv.style.top = vertical + 'px';
});

document.getElementById('boxleft').addEventListener('click', function() {
    horizontal = horizontal - 7;
    centerdiv.style.left = horizontal + 'px';
});

document.getElementById('boxright').addEventListener('click', function() {
    horizontal = horizontal + 7;
    centerdiv.style.left = horizontal + 'px';
});

document.getElementById('box1').addEventListener('click', function() {
    size = size + 1;
    avatar.style.height = size + '%';
});

document.getElementById('box2').addEventListener('click', function() {
    size = size - 1;
    avatar.style.height = size + '%';
});

document.getElementById('img1').addEventListener('click', function() {
    document.getElementById('boxleft').style.opacity = '0';
    document.getElementById('boxright').style.opacity = '0';
    document.getElementById('boxup').style.opacity = '0';
    document.getElementById('boxdown').style.opacity = '0';
    document.getElementById('ava1').style.opacity = '0';
    document.getElementById('ava2').style.opacity = '0';
    document.getElementById('box1').style.opacity = '0';
    document.getElementById('box2').style.opacity = '0';
});

document.getElementById('header').addEventListener('click', function() {
    document.getElementById('boxleft').style.opacity = '1';
    document.getElementById('boxright').style.opacity = '1';
    document.getElementById('boxup').style.opacity = '1';
    document.getElementById('boxdown').style.opacity = '1';
    document.getElementById('ava1').style.opacity = '1';
    document.getElementById('ava2').style.opacity = '1';
    document.getElementById('box1').style.opacity = '1';
    document.getElementById('box2').style.opacity = '1';
});

document.getElementById('img2').addEventListener('click', function() {
    document.getElementById('hat').style.display = 'block';
});

document.getElementById('img3').addEventListener('click', function() {
    document.getElementById('shirt').style.display = 'block';
});

document.getElementById('img4').addEventListener('click', function() {
    document.getElementById('bow').style.display = 'block';
})
