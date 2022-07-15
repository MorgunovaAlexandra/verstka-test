
const ul=document.querySelector('.header__list')
const body=document.querySelector('body')
const div=document.createElement('div')
const burger=document.querySelector('.header__burger')
const mainAction=document.querySelector('.main__action')


burger.addEventListener('click',()=>{
    div.innerHTML=(``)
    ul.appendChild(div)
})

if(body.classList.contains('lock')){
    div.classList.add('none')
}
else{
    
}