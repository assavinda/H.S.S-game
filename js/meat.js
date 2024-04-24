import { DialogueControl } from "./DialogueControl.js";

const DLcontrol = new DialogueControl;

const thispage = document.getElementById('meatShop');
const sign = document.getElementById('meatsign');

sign.onanimationiteration = () => {
    sign.style.animationPlayState = 'paused';
};



let Itr = 0;
thispage.onanimationiteration = () => {
    Itr++;
    thispage.style.animationPlayState = 'paused';
    if (Itr == 1) {
        let scene = localStorage.getItem('currentScene');
        let script = localStorage.getItem('currentScript');

        setTimeout(() => {
            sign.style.animationPlayState = 'running';
        },1000);

        setTimeout(() => {
            DLcontrol.ShowNpcScene(Object.keys(DLcontrol.script)[scene],script);
        },2000);
    }
};
