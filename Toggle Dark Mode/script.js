let light=document.getElementById("light-mode");
let dark=document.getElementById('dark-mode');
light.addEventListener('click',function(){
    document.body.style.backgroundColor='white';
})
dark.addEventListener('click',function(){
    document.body.style.backgroundColor='black';

})