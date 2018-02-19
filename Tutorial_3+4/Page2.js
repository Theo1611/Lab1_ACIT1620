var bgText = document.getElementById('bgText');
var prevDiv = document.getElementById('preview');
var menu = document.getElementById('menu');

var c1 = document.getElementById('choice1');
var c2 = document.getElementById('choice2');
var c3 = document.getElementById('choice3');

var numUse = 0;

var picChooser = document.getElementById('picChooser');

picChooser.addEventListener('change', function(){
    var picNum = parseInt(picChooser.value);
    if (picNum > 3){
        picChooser.value = 1;
    }
    if (picNum < 1){
        picChooser.value = 3;
    }
    prevDiv.style.backgroundImage = 'url(imgs/img'+picChooser.value+'.jpg)';
});
bgText.addEventListener('keyup', function(ev){
    if (ev.keyCode == 13){
        if (c1.checked){
            if (bgText.value == 'bird'){
                document.body.style.backgroundImage = 'url(imgs/img1.jpg)';
            } else if (bgText.value == 'grass'){
                document.body.style.backgroundImage = 'url(imgs/img2.jpg)';
            } else if (bgText.value == 'dog'){
                document.body.style.backgroundImage = 'url(imgs/img3.jpg)';
            } else {
                document.body.style.backgroundColor = bgText.value;
            }
            
        } else if (c2.checked){
            if (bgText.value == 'bird'){
                prevDiv.style.backgroundImage = 'url(imgs/img1.jpg)';
            } else if (bgText.value == 'grass'){
                prevDiv.style.backgroundImage = 'url(imgs/img2.jpg)';
            } else if (bgText.value == 'dog'){
                prevDiv.style.backgroundImage = 'url(imgs/img3.jpg)';
            } else {
                prevDiv.style.backgroundColor = bgText.value;
            }
            
        } else if (c3.checked) {
            if (bgText.value == 'bird'){
                menu.style.backgroundImage = 'url(imgs/img1.jpg)';
            } else if (bgText.value == 'grass'){
                menu.style.backgroundImage = 'url(imgs/img2.jpg)';
            } else if (bgText.value == 'dog'){
                menu.style.backgroundImage = 'url(imgs/img3.jpg)';
            } else {
                menu.style.backgroundColor = bgText.value;
            }
            
        } else {
            alert('Choose an option');
        } bgText.value = '';
        numUse++;
        if (numUse > 5) {
            document.getElementById('display').innerHTML = 'You\'ve reached the limit. Please pay to use more!';
        }
    }
});