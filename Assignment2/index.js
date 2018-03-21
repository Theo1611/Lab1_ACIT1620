var dispDiv = document.getElementById('display'),
    controls = document.getElementById('controls'),
    menu = document.getElementById('menu'),
    bg = document.getElementById('background'),
    title = document.getElementById('title'),
    desC = document.getElementById('description'),
    bgInp = document.getElementById('bgFile'),
    titleInp = document.getElementById('titleInp'),
    desInp = document.getElementById('desPara'),
    colorInp = document.getElementById('colorInp'),
    bgHeight = 300,
    bgTop = 0,
    bgLeft = 0;
    
function expandMenu(){
    controls.style.bottom = '0px';
};

function changeColor(){
    title.style.color = colorInp.value;
    desC.style.color = colorInp.value;
};

function changeDescription(){
    desC.innerHTML = desInp.value;
};

function changeTitle(){
    title.innerHTML = titleInp.value;
};

function changeBG(){
    if (bgInp.value == 'horse') {
        bg.style.backgroundImage = 'url(imgs/bg1.jpg)';
    } else if(bgInp.value == 'night') {
        bg.style.backgroundImage = 'url(imgs/bg2.jpg)';
    } else if(bgInp.value == 'mountain') {
        bg.style.backgroundImage = 'url(imgs/bg3.jpg)';
    } else if(bgInp.value.indexOf('epic') != -1) {
        bg.style.backgroundImage = 'url(imgs/bg4.jpg)';
    } else {
        bg.style.backgroundImage = 'url('+bgInp.value+')';
    }
    console.log(bgInp.value)
    bgInp.value = ''
};

function moveBG(ev){
    if (ev.keyCode == 187){
        bgHeight = bgHeight + 10;
    } else if (ev.keyCode == 189){
        bgHeight = bgHeight - 10;
    } else if (ev.keyCode == 37){
        bgLeft = bgLeft - 10;
    } else if (ev.keyCode == 38){
        bgTop = bgTop - 10;
    } else if (ev.keyCode == 39){
        bgLeft = bgLeft + 10;
    } else if (ev.keyCode == 40){
        bgTop = bgTop + 10;
    }
    bg.style.backgroundPosition = bgLeft + 'px'+' '+bgTop+ 'px';
    bg.style.height = bgHeight + 'px';
};
    
function creator(){
    var newDisp = document.createElement('div');
    var newBg = document.createElement('div');
    var newTitle = document.createElement('div');
    var newDesC = document.createElement('div'); 
    newBg.appendChild(newTitle);
    newBg.appendChild(newDesC);
    newDisp.appendChild(newBg);
    dispDiv.appendChild(newDisp);
    newDisp.className = 'col-lg-3 col-md-4 col-sm-6 col-12';
    newBg.className = 'bg';
    newTitle.className = 'title';
    newDesC.className = 'description';
    newBg.style.cssText = bg.style.cssText;
    newTitle.innerHTML = title.innerHTML;
    newDesC.innerHTML = desC.innerHTML;
    newDesC.style.cssText = desC.style.cssText;
    newTitle.style.cssText = title.style.cssText;
}
    
menu.addEventListener('click', function(){
    expandMenu()
});
    
bgInp.addEventListener('keyup', function(ev){
    if(ev.keyCode == 13){
        changeBG()
    }
});

titleInp.addEventListener('keyup', function(ev){
    changeTitle()
});

desInp.addEventListener('keyup', function(ev){
    changeDescription()
});

colorInp.addEventListener('change', function(){
    changeColor()
});

document.addEventListener('keydown', function(ev){
    moveBG(ev)
});

document.getElementById('plus').addEventListener('click', function(){
    creator()
});