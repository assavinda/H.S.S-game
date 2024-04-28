import { DialogueControl } from "./DialogueControl.js";
import { NextPage } from "./general.js"
const DLcontrol = new DialogueControl;

const thispage = document.getElementById('Collectable');
const sign = document.getElementById('Collectionsign');
const zoom = document.getElementById('zoombtn2');
const Backbtn = document.getElementById('backbtn2');

let normalScale = 1;
let isZoomed = false; // เพิ่มตัวแปรเพื่อตรวจสอบสถานะการซูม

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
        },500);

        setTimeout(() => {
            DLcontrol.ShowNpcScene(Object.keys(DLcontrol.script)[scene],script);
        },3000);
    }
};

const itemImages = document.getElementById('item-images');

itemImages.onanimationiteration = () => {
    itemImages.style.animationPlayState = 'paused';
}

const choices = document.getElementById('choices');
choices.onanimationiteration = () => {
    choices.style.animationPlayState = 'paused'
}

let scale = 1.0

zoom.addEventListener('click', () => {
    console.log('zoom');
    if (isZoomed == false) {
        let zoomInterval = setInterval(() => {
            scale += 0.005
            thispage.style.transform = `scale(${scale})`;
            if(scale >= 1.4) {
                stopInterval(zoomInterval)
            }
        },2)
        zoom.style.display = 'none';
        Backbtn.style.display = 'block';
        Backbtn.style.animationPlayState = 'running'
        isZoomed = true; // เมื่อซูมเข้าแล้วเปลี่ยนสถานะการซูม
    }
});

Backbtn.addEventListener('click', () => {
    let zoomInterval = setInterval(() => {
        scale -= 0.005
        thispage.style.transform = `scale(${scale})`;
        if(scale <= 1) {
            stopInterval(zoomInterval)
        }
    },2)
    Backbtn.style.display = 'none';
    isZoomed = false; // เมื่อกดปุ่ม back เปลี่ยนสถานะการซูม

    const choices = document.getElementById('choices');
    choices.classList.remove('hidden')
    choices.style.animationPlayState = 'running'
});

function stopInterval(interval) {
    clearInterval(interval)
}
