


function howdyAttack() {
    for (let i = 0; i<5;i++) {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = 'howdy'+i;
        document.querySelector('.howdyclass').appendChild(paragraph);
    }
    
}

let howdyButton = document.querySelector('.howdy-add-button');
howdyButton.addEventListener('click', howdyAttack);



///
function removal() {
    // let paragraph = document.querySelector('p').lastElementChild;
    // document.querySelector('.howdyclass').removeChild(paragraph);

    const parent = document.querySelector('.howdyclass');
    parent.removeChild(parent.lastElementChild);


}



let removeButton = document.querySelector('.howdy-remove-button');

removeButton.addEventListener('click', removal);


