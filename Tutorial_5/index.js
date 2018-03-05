var dispDiv = document.getElementById('display'),
    st1 = document.getElementById('st1'),
    st2 = document.getElementById('st2'),
    imgSrc = null,
    stInp = document.getElementById('stickerUrl'),
    height = null,
    stC = document.getElementById('cursor');

document.getElementById('bgcolor').addEventListener('change', function(){
    dispDiv.style.backgroundColor = this.value;
});

st1.addEventListener('click', function(){
    changeImg(this);
});
    
st2.addEventListener('click', function(){
    changeImg(this);
});

dispDiv.addEventListener('click', function(ev){
    var newImg = document.createElement('img');
    newImg.className = 'displayStickers';
    if (height != null) {
        newImg.style.height = height + 'px';
    }
    newImg.src = imgSrc;
    dispDiv.appendChild(newImg);
    
    var X = ev.pageX - newImg.width/2;
    var Y = ev.pageY - newImg.height/2;
    newImg.style.left = X + 'px';
    newImg.style.top = Y + 'px';
});

dispDiv.addEventListener('mousemove', function(ev){
    stC.style.top = ev.pageY - stC.height/2 + 'px';
    stC.style.left = ev.pageX - stC.width/2 + 'px';
});

stInp.addEventListener('keyup', function(ev){
    if (ev.keyCode == 13) {
        var newSticker = document.createElement('img');
        newSticker.src = stInp.value;
        newSticker.className = 'stickers';
        document.getElementById('stickers').appendChild(newSticker);
        stInp.value = '';
        newSticker.addEventListener('click', function(){
            changeImg(this);
        })
    }
});

document.getElementById('stickerHeight').addEventListener('change', function(){
    height = this.value;
});

function changeImg (el) {
    imgSrc = el.src;
    stC.src = el.src;
}

