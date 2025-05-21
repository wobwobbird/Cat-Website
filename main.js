window.attack = function () {
    document.body.innerHTML = "you have been hacked";
}

let hoverbutton = document.querySelector('.hover-button');

hoverbutton.addEventListener('mouseover', function() {
    document.querySelector('.index').style.backgroundColor = 'black';
});

hoverbutton.addEventListener('mouseout', function() {
    document.querySelector('.index').style.backgroundColor =' #fff0e5';
});



let b1 = document.querySelector('.b-1');

b1.onclick = function() {
    b1.innerHTML = 'You were tricked hahaha';
}


document.querySelector('.b-2').onclick = function() {
    document.querySelector('.b-2').innerHTML = 'And again! Do you dare another try?!? ';
}


let b3 = document.querySelector('.b-3');

b3.onclick = function() {
    window.open('https://en.wikipedia.org/wiki/Cat');
}



document.querySelector('.button-54').onclick = function() {
    window.open('https://en.wikipedia.org/wiki/Cats_in_ancient_Egypt');
}



