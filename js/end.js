import { DialogueControl } from "./DialogueControl.js";

const DLcontrol = new DialogueControl;

const thispage = document.getElementById('end')
const vdo = document.getElementById('vdo')
const text = document.getElementById('endtext')
const endsentence = document.getElementById('endsentence')

const sceneObserver = new MutationObserver(mutationsList => {
    mutationsList.forEach(mutation => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        if(thispage.classList.contains('hidden') == false) {
            vdo.playing
            vdo.currentTime = 0
        }
        else {
            vdo.paused
        }
      }
    });
});
  
const observerConfig = { attributes: true, attributeFilter: ['class'] };
  
sceneObserver.observe(thispage, observerConfig);

thispage.onanimationiteration = () => {
    thispage.style.animationPlayState = 'paused'
    const ans = localStorage.getItem('ans')
    let char = 0
    let TextInterval = setInterval(() => {
        text.innerHTML += DLcontrol.script['end'][ans].charAt(char)
        char++;
        if (char >= currentScript.length) {
            PauseGenerateText(TextInterval);
        }
    },30);
    setTimeout(() => {
        vdo.classList.add('hidden')
        text.classList.add('hidden')
        endsentence.classList.remove('hidden')
        setTimeout(() => {
            endsentence.style.animationName = 'endsentencerv'
        },3000)
        setTimeout(() => {
            window.location.reload()
        },5000)
    },7000)
}

function PauseGenerateText(Interval) {
    clearInterval(Interval);
}