
const minusButton = document.querySelectorAll('.icon');
const hideAnswer = document.querySelectorAll('.ans');
minusButton.forEach( minus =>{
    minus.addEventListener('click',()=>{
         const answer = minus.closest('.que_ans').querySelector('.ans')
         const icon = minus.closest('.que').querySelector('.icon')
    icon.classList.toggle('dr');
    answer.classList.toggle('hidden') 
    })
  
})
