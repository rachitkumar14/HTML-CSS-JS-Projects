let speakbtn=document.querySelector('#speak_button');
let text=document.querySelector('#textData');
speakbtn.addEventListener('click',()=>{
//   let speechText =  text.value;
//   let speechData=new SpeechSynthesisUtterance();
// speechData.text=speechText;
//   speechSynthesis.speak(speechData);
speechText = text.value;

let speechData = new SpeechSynthesisUtterance();

speechData.text = speechText;

speechSynthesis.speak(speechData);
})