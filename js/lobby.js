import { DialogueControl } from "./DialogueControl.js";

const DLcontrol = new DialogueControl

const btnStart = document.getElementById('btn-start');
const thispage = document.getElementById('lobby');

btnStart.addEventListener('click',() => {
    console.log('start')
    thispage.style.animationPlayState = 'running'
})

let Itr = 0;
thispage.onanimationiteration = () => {
    Itr++;
    console.log(Itr);
    if(Itr == 1) {
        btnStart.classList.add('hidden');
    }
    else if(Itr == 2) {
        let scene = 0;
        let script = 0;
        thispage.style.animationPlayState = 'paused';
        setTimeout(() => {
            DLcontrol.ShowNpcScene(Object.keys(DLcontrol.script)[scene],script);
            localStorage.setItem('currentScene',scene);
            localStorage.setItem('currentScript',script);
        },200);
    }
}