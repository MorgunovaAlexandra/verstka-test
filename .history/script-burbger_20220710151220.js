
const ul=document.querySelector('.header__list')
const body=document.querySelector('body')
const div=document.createElement('div')
const burger=document.querySelector('.header__burger')
const mainAction=document.querySelector('.main__action')


burger.addEventListener('click',()=>{
    div.innerHTML=(`<div class="main__action">
    <div class="action__text">CONTACT US</div>
    <img src="./img/icons/rozetka.svg" alt="rozetka">
    </div>`)
    ul.appendChild(div)
})

if(body.classList.contains('lock')){
    div.classList.add('none')
}
else{
    
}