const cardContainer=document.querySelector('.card-container')
// const cardEl=document.querySelectorAll('.card')
const iconContainer=document.querySelector('.icon--container')
const leftBtn=document.querySelector('.icon--container .fa-arrow-left')
const rightBtn=document.querySelector('.icon--container .fa-arrow-right')
const countEl=document.querySelector('.icon--container #count');

const modelBtn=document.querySelector('.model--btn')
const addCardBtn=document.querySelector('.add--card--btn')
const addCardWindow=document.querySelector('.add-card-window')
const addCardForm=document.querySelector('.add--card--form')

// setInterval(move,8000)

const displayModel=function(){
    addCardWindow.classList.toggle('hidden')
}
const closeCardModel=function(){
    addCardWindow.classList.toggle('hidden')
}

const textInput =document.getElementById('text')
const answerInput =document.getElementById('answer')

const renderData=function(e){
    e.preventDefault();
    if(textInput.value==='' && answerInput.value===''){
        textInput.classList.add('warning')
        answerInput.classList.add('warning')
    }
    else if(textInput.value===''){
        textInput.classList.add('warning')
    }
    else if(answerInput.value===''){
        answerInput.classList.add('warning')
    } 
    else{
        implementFormData()
        textInput.value=''
        answerInput.value=''
        textInput.classList.remove('warning')
        answerInput.classList.remove('warning')
    }
}

const btnCloseModel=document.querySelector('.btn--close-card');

const renderMarkup=function(){
    return `
    <div class="card">
        <div class="card-front-face">
            <p>${textInput.value}</p>
        </div>
        <div class="card-back-face">
            <p>${answerInput.value}</p>
        </div>
    </div> 
    `
}

const implementFormData=function(){
    cardContainer.innerHTML += renderMarkup();
    // console.log(cardContainer)
    addCardWindow.classList.toggle('hidden');

    implementSlider();
}

let curPage=0;
function implementSlider(){
    const cardEl=cardContainer.querySelectorAll('.card');
    console.log(cardEl.length)

    cardEl.forEach(function(card){
        // console.log(card)
        card.addEventListener('click',function(e){
            console.log('hello')
            const target=e.target.parentElement;
            console.log(target)
            target.classList.toggle('flipped');
        })
    })

    let index=0;
    function move(){
        index++;
        if(index > cardEl.length-1){
            index=0;
        }
        cardContainer.style.transform=`translateX(${-index*450}px)`;
    }

    function back(){
        index--;
        if(index < 0){
            index= cardEl.length -1;
        }
        cardContainer.style.transform=`translateX(${-index*450}px)`;
    }
    rightBtn.addEventListener('click',move)
    leftBtn.addEventListener('click',back)

    countEl.innerHTML=`${curPage}/${cardEl.length}`;
}

addCardBtn.addEventListener('click',displayModel)
modelBtn.addEventListener('click',renderData)
btnCloseModel.addEventListener('click',closeCardModel)





