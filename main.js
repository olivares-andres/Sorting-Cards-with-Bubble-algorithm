const arrSimbols = ['&diams;', '&hearts;', '&clubs;', '&spades;'];
const arrColors = ['#FF2D00', '#000000'];
const numberCard = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K'];
let arrCards = [];


//contruyo la carta
const paintCard = (set) =>{
    
    let rSimbol = parseInt(Math.random() * (arrSimbols.length));
    let rNum = parseInt(Math.random() * (numberCard.length));

    // creo la carta y partes por separado
    const card = document.createElement('div');
    card.id = "card" + set; 
    card.className = "card";
    
    const htmlSpan = document.createElement('span');
    htmlSpan.style.color = arrColors[rSimbol];
    htmlSpan.innerHTML = arrSimbols[rSimbol];

    const head = document.createElement('div');
    head.className = "head";
    head.appendChild(htmlSpan);
    card.appendChild(head);

    const p = document.createElement('p');
    p.className = "numb";
    p.innerHTML = numberCard[rNum];
    p.style.color = arrColors[rSimbol];
    card.appendChild(p);

     const spanDown = document.createElement('span');
    spanDown.style.color = arrColors[rSimbol];
    spanDown.innerHTML = arrSimbols[rSimbol];;

    const bottom = document.createElement('div');
    bottom.className = "bottom";
    bottom.appendChild(spanDown);
    card.appendChild(bottom);

    const finalCard = {
        'pos': numberCard[rNum], 'card': card, 
    };

    arrCards.push(finalCard);

    return card;
}

//funcion flecha de Draw
const drawCards = () => {
    arrCards = [];
       const ButtonDraw = document.getElementById('Draw').value;
       const divCard = document.getElementById('DrawCards');
         
       for (let i = 1; i <= ButtonDraw; i++) {
           let carta = paintCard(i);
           divCard.appendChild(carta);
       }
   };



//ordenar cartas con metodo select
const selectSort = () => {
    let min = 0;
    for(let i = 0; i < arrCards.length - 1; i++) {
        for(let j = i+1; j < arrCards.length; j++) {
            if(arrCards[j].pos < arrCards[i].pos) {
                let tmp = arrCards[j];
                arrCards[j] = arrCards[i];
                arrCards[i] = tmp;
                insertSort(min);
                min++
            }
        }
    }
   
}
//funcion flecha del sort
const insertSort = (set) => {
    const ulSort = document.createElement('ul');
    ulSort.className = 'sortingCards';

    const liSort = document.createElement('li');
    liSort.innerHTML = set;
    ulSort.append(liSort);

    for(let i = 0; i < arrCards.length; i++) {
        const nCard = arrCards[i].card.cloneNode(true);
        ulSort.appendChild(nCard);
    }

    const insertSort = document.getElementById('sortCards');
    insertSort.appendChild(ulSort);
}