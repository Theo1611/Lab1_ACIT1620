var div1 = document.getElementById('ch1')
var div2 = document.getElementById('ch2')
var div3 = document.getElementById('ch3')
var zoom = document.getElementById('zoom')
var width = 100
var height = 70

document.getElementById('BG1').addEventListener('click', function() {
    img1 = div1.style.backgroundImage = 'url(imgs/i1.jpg)';
    img2 = div2.style.backgroundImage = 'url(imgs/i2.jpg)';
    img3 = div3.style.backgroundImage = 'url(imgs/i3.jpg)';
});

document.getElementById('BG2').addEventListener('click', function() {
    img1 = div1.style.backgroundImage = 'url(imgs/i4.jpg)';
    img2 = div2.style.backgroundImage = 'url(imgs/i5.jpg)';
    img3 = div3.style.backgroundImage = 'url(imgs/i6.jpg)';
});

document.getElementById('BG3').addEventListener('click', function() {
    img1 = div1.style.backgroundImage = 'url(imgs/i7.jpg)';
    img2 = div2.style.backgroundImage = 'url(imgs/i8.jpg)';
    img3 = div3.style.backgroundImage = 'url(imgs/i9.jpg)';
});

document.getElementById('BG4').addEventListener('click', function() {
    img1 = div1.style.backgroundImage = 'url(imgs/i10.jpg)';
    img2 = div2.style.backgroundImage = 'url(imgs/i11.jpg)';
    img3 = div3.style.backgroundImage = 'url(imgs/i12.jpg)';
});

document.getElementById('ch1').addEventListener('mouseenter', function () {
    appimg = zoom.style.backgroundImage = img1;
});

document.getElementById('ch2').addEventListener('mouseenter', function () {
    appimg = zoom.style.backgroundImage = img2;
});

document.getElementById('ch3').addEventListener('mouseenter', function () {
    appimg = zoom.style.backgroundImage = img3;
});

document.getElementById('zoom').addEventListener('click', function() {
    document.getElementById('zoomcontrols').style.display = 'block';
});

document.getElementById('zoomin').addEventListener('click', function() {
    width = width + 10;
    height = height + 7;
    zoom.style.width = width + '%';
    zoom.style.height = height + '%';
});

document.getElementById('zoomout').addEventListener('click', function() {
    width = width - 10;
    height = height -7;
    zoom.style.width = width + '%';
    zoom.style.height = height + '%';
});
