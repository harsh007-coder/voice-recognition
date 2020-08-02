const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const greetings = [
    'namaste india',
    'how are you homeboi',
    'congrats for this completing this code',
    'i am fine ',
    'apna time aayega',
    'bus bhai badiya hu'
];

const weather = [
    'weather is fine',
    'its a lovely day',
    'bhai girlfriend leaves me or tujhe weather ki padhi he'
];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function(){
    console.log('voice is activated, you can to microphone');
};

recognition.onresult = function(event){
 const current = event.resultIndex;

 const transcript = event.results[current][0].transcript;
 content.textContent = transcript;
 readOutLoad(transcript);
};

//add listener to the btn

btn.addEventListener('click',()=>{
    recognition.start();
});

function readOutLoad(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = 'hi harsh but i dont know what you said';

if(message.includes('how are you')){
 const final =   greetings[Math.floor(Math.random()*greetings.length)];
    speech.text = final;
}
else if(message.includes('what is the weather')){
    const weath = weather[Math.floor(Math.random()*weather.length)];
    speech.text = weath;
}

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}