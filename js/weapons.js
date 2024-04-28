import { DialogueControl } from "./DialogueControl.js";
import { NextPage } from "./general.js"

const DLcontrol = new DialogueControl;

const thispage = document.getElementById('weapons');
const sign = document.getElementById('weaponsign');
const zoom = document.getElementById('zoombtn');
const Backbtn = document.getElementById('backbtn');
const gun = document.getElementById('GunImages');
const bow = document.getElementById('bowImages');

let isZoomed = false; // เพิ่มตัวแปรเพื่อตรวจสอบสถานะการซูม

sign.onanimationiteration = () => {
    sign.style.animationPlayState = 'paused';
};

gun.onanimationiteration = () => {
    gun.style.animationPlayState = 'paused';
};

bow.onanimationiteration = () => {
    bow.style.animationPlayState = 'paused';
};

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

function stopInterval(interval) {
    clearInterval(interval)
}

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

    let currentScene = localStorage.getItem('currentScene');
    let currentScript = localStorage.getItem('currentScript');
    let currentSceneKey = Object.keys(DLcontrol.script)[currentScene];
    if(currentScript == 2) {
        currentScript++;
        DLcontrol.ShowNpcScene(currentSceneKey,currentScript);
        gun.style.animationPlayState = 'running';
        bow.style.animationPlayState = 'running';
        localStorage.setItem('currentScript',currentScript);
    }
    else if(currentScript == 5) {
        currentScript++;
        currentScene++;
        thispage.style.animationPlayState = 'running';
        NextPage();
    }
});

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
            gun.style.animationPlayState = 'running';
        },3000);
    }
};

