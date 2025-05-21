
///Column 1

function howdyAttack() {
    for (let i = 0; i<2;i++) {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = 'howdy'+i;
        document.querySelector('.howdyclass').appendChild(paragraph);
    }
    
}

let howdyButton = document.querySelector('.howdy-add-button');
howdyButton.addEventListener('click', howdyAttack);



function removal() {
    // let paragraph = document.querySelector('p').lastElementChild;
    // document.querySelector('.howdyclass').removeChild(paragraph);

    const parent = document.querySelector('.howdyclass');
    parent.removeChild(parent.lastElementChild);


}



let removeButton = document.querySelector('.howdy-remove-button');

removeButton.addEventListener('click', removal);


///Column 2
let clicked = document.querySelector('.defaultButton');

let theColors = ['red', 'green', 'blue', 'yellow']
let flag = false;

clicked.onclick = function () {
    let numberoo = Math.floor(Math.random() * 4);
    clicked.style.backgroundColor = theColors[numberoo];
    pressP(numberoo);
    flag = true;
}

function pressP(numberoo) {
    if (numberoo === 1) {
        document.getElementById('pressanswer').innerHTML = 'I am finally green! Praise the lord!!!';
    } else {
        document.getElementById('pressanswer').innerHTML = 'Why do my deams always get shattered?';
    }
}


///column 3

let smiteThe = document.querySelector('.smite');

smiteThe.onclick = function() {
    smiteThe.parentElement.hidden = true;
}

///column 4
let marsbutton = document.querySelector('.marsbutton');
let mars = document.querySelector('.mars');
mars.hidden = true;

marsbutton.addEventListener('click', function() {
    mars.hidden = false;
    
})






