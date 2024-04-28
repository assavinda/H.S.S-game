import { DialogueControl } from "./DialogueControl.js";

const DLcontrol = new DialogueControl;

const thispage = document.getElementById('end')
const vdo = document.getElementById('vdo')
const text = document.getElementById('endtext')

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
        thispage.classList.add('hidden')
        setTimeout(() => {
            window.location.reload()
        },1000)
    },7000)
}

function PauseGenerateText(Interval) {
    clearInterval(Interval);
}