var menu = document.getElementById('menu')
var bg = document.getElementById('bg')

document.getElementById('openbut').addEventListener('click', function() {
    menu.style.left = '0px';
});

document.getElementById('closebut').addEventListener('click', function() {
    menu.style.left = '-110px';
});

document.getElementById('makebg').addEventListener('click', function() {
    bg.style.backgroundImage = appimg
});

document.getElementById('reset').addEventListener('click', function() {
    bg.style.backgroundImage = 'none'
});

document.getElementById('showapp').addEventListener('click', function() {
    document.getElementById('app1').style.display = 'block'
});

document.getElementById('hideapp').addEventListener('click', function() {
    document.getElementById('app1').style.display = 'none'
});