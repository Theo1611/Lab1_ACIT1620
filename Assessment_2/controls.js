var prevDiv = document.getElementById('preview'),
    dispDiv = document.getElementById('display'),
    range1 = document.getElementById('range1'),
    range2 = document.getElementById('range2'),
    range3 = document.getElementById('range3'),
    range4 = document.getElementById('range4'),
    hair = document.getElementById("hair"),
    eyes = document.getElementById("eyes"),
    nose = document.getElementById("nose"),
    mouth = document.getElementById("mouth"),
    timer = null;

function changeType(typeInp){
    range1.type = typeInp;
    range2.type = typeInp;
    range3.type = typeInp;
    range4.type = typeInp;
}

function randomFace(){
    hair.src = 'img/hair'+ (Math.floor(Math.random() * 3) + 1) + '.png';
    eyes.src = 'img/eyes'+ (Math.floor(Math.random() * 3) + 1) + '.png';
    nose.src = 'img/nose'+ (Math.floor(Math.random() * 3) + 1) + '.png';
    mouth.src = 'img/mouth'+ (Math.floor(Math.random() * 3) + 1) + '.png';
    var r = Math.floor(Math.random() * 256),
        g = Math.floor(Math.random() * 256),
        b = Math.floor(Math.random() * 256),
        hairSize = Math.floor(Math.random() * 71),
        eyesSize = Math.floor(Math.random() * 41),
        noseSize = Math.floor(Math.random() * 31),
        mouthSize = Math.floor(Math.random() * 36);
    range1.value = hairSize;
    range2.value = eyesSize;
    range3.value = noseSize;
    range4.value = mouthSize;
    hair.style.width = hairSize + '%';
    eyes.style.width = eyesSize + '%';
    nose.style.width = noseSize + '%';
    mouth.style.width = mouthSize + '%';
    prevDiv.style.backgroundColor = 'rgb('+ r + ',' + g + ',' + b + ')';
}

function createFace(){
    var nbootdiv = document.createElement('div')
        ndiv = document.createElement('div'),
        nhair = document.createElement('img')
        neyes = document.createElement('img')
        nnose = document.createElement('img')
        nmouth = document.createElement('img');
    ndiv.appendChild(nhair);
    ndiv.appendChild(neyes);
    ndiv.appendChild(nnose);
    ndiv.appendChild(nmouth);
    nbootdiv.appendChild(ndiv);
    dispDiv.appendChild(nbootdiv);
    nbootdiv.className = 'col-xl-1 col-lg-1.5 col-md-2 col-sm-3';
    ndiv.className = 'newDiv';
    ndiv.style.backgroundColor = prevDiv.style.backgroundColor;
    nhair.style.cssText = hair.style.cssText;
    nhair.src = hair.getAttribute('src');
    nhair.className = 'items';
    neyes.style.cssText = eyes.style.cssText;
    neyes.src = eyes.getAttribute('src');
    neyes.className = 'items';
    nnose.style.cssText = nose.style.cssText;
    nnose.src = nose.getAttribute('src');
    nnose.className = 'items';
    nmouth.style.cssText = mouth.style.cssText;
    nmouth.src = mouth.getAttribute('src');
    nmouth.className = 'items';
    ndiv.addEventListener('click', function(){
        dispDiv.removeChild(ndiv);
    });
}
    
document.getElementById('colorInp').addEventListener('change', function(){
    prevDiv.style.backgroundColor = this.value;
});

document.getElementById('Range').addEventListener('click', function(){
    changeType('range');
});

document.getElementById('Number').addEventListener('click', function(){
    changeType('number');
});

range1.addEventListener('change', function() {
    hair.style.width = range1.value+'%';
});

range2.addEventListener('change', function() {
    eyes.style.width = range2.value+'%';
});

range3.addEventListener('change', function() {
    nose.style.width = range3.value+'%';
});

range4.addEventListener('change', function() {
    mouth.style.width = range4.value+'%';
});

document.getElementById('Plus').addEventListener('click', function(){
    createFace();
    ndiv.addEventListener('click', function(){
        dispDiv.removeChild(ndiv);
    });
    
});

document.getElementById('Random').addEventListener('click', function(){
    randomFace();
});

document.getElementById('AutoRandomCreate').addEventListener('click', function(){
    if (timer == null){
        timer = setInterval(function(){
        randomFace();
        createFace();
        }, 500);
    }
});

document.getElementById('StopAutoCreate').addEventListener('click', function(){
    clearInterval(timer);
    timer = null
});

