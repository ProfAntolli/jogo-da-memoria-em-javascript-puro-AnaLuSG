
const grid = document.querySelector('.grid');
const timer = document.querySelector('.timer');

const characters = [
    'andy', 
    'king2',
    'ash',
    'mai', 
    'terry',
    'yuri',
    'athena',
    'leona2',
    'kula',
    'kim',
    'joe',
    'yori',
];


const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

 const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');

    if(disabledCards.length === 24){
        clearInterval(this.loop);
        alert ('You Win');
    }
 }

const checkCards = () => {
    const firstCharacter = firstCard.getAttribute ('data-character');
    const secondCharacter = secondCard.getAttribute ('data-character');

    if(firstCharacter === secondCharacter){

        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = '';
        secondCard = '';

        checkEndGame();

    }else{
        setTimeout(() => {
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard ='';

        }, 500);
        
}
}
const revealCard = ({target}) => {

    if(target.parentNode.classList.add('reveal-card')){
        return;
    }

    if(firstCard === ''){
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
    }else if (secondCard === ''){
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();
    }
}

const createCard = (character) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'front');
    const back = createElement('div', 'back');

    front.style.backgroundImage = `url('../imagens/${character}.jpg')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', character);

    return card;

}
const loadGame= () => {

    const duplicateCharactres = [ ...characters, ...characters ];

    const shuffledArray = duplicateCharactres.sort(() => Math.random() - 0.5);

    shuffledArray.forEach((character)=> {

        const card = createCard(character);
        grid.appendChild(card);

    });
}

const startTimer = () => {
    this.loop = setInterval(() => {
        const currentTime = +timer.innerHTML;
        timer.innerHTML = currentTime + 1 ;
    }, 1000); 
} 
startTimer();
loadGame();
console.log(this);   