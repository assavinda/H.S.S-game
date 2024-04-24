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
        },1000);

        setTimeout(() => {
            DLcontrol.ShowNpcScene(Object.keys(DLcontrol.script)[scene],script);
        },2000);
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

zoom.addEventListener('click', () => {
    console.log('zoom');
    if (isZoomed == false) {
        thispage.style.transform = 'scale(1.4)';
        normalScale = 1.4;
        zoom.style.display = 'none';
        Backbtn.style.display = 'block';
        Backbtn.style.animationPlayState = 'running'
        isZoomed = true; // เมื่อซูมเข้าแล้วเปลี่ยนสถานะการซูม
    } else {
        thispage.style.transform = 'scale(1)';
        normalScale = 1;
        Backbtn.style.display = 'none'; // ซ่อนปุ่ม back เมื่อกลับไปยังขนาดปกติ
        zoom.style.display = 'block'; // แสดงปุ่ม zoom อีกครั้งหลังจากกลับไปยังขนาดปกติ
        isZoomed = false; // เมื่อกดปุ่ม back เปลี่ยนสถานะการซูม
    }
});

Backbtn.addEventListener('click', () => {
    thispage.style.transform = 'scale(1)';
    normalScale = 1;
    Backbtn.style.display = 'none';
    zoom.style.display = 'block';
    isZoomed = false; // เมื่อกดปุ่ม back เปลี่ยนสถานะการซูม

    const choices = document.getElementById('choices');
    choices.classList.remove('hidden')
    choices.style.animationPlayState = 'running'
});

const yes = document.getElementById('yes');
const no = document.getElementById('no');

window.addEventListener('click',(e) => {
    let scene = localStorage.getItem('currentScene');
    let script = localStorage.getItem('currentScript');

    let target = e.target.id
    let keyItem = localStorage.getItem('key');

    if(Object.keys(DLcontrol.script)[scene] == 'Collectable') {
        yes.innerHTML = DLcontrol.QAscript[Object.keys(DLcontrol.script)[scene]][keyItem]['yes'][0];
        no.innerHTML = DLcontrol.QAscript[Object.keys(DLcontrol.script)[scene]][keyItem]['no'][0];
        if(target == 'yes') {
            console.log('yes')
            DLcontrol.ShowNpcScene(Object.keys(DLcontrol.script)[scene],script);
            choices.style.animationPlayState = 'running'
            console.log('keyagain:',keyItem)
            DLcontrol.script[Object.keys(DLcontrol.script)[scene]][script][0] = DLcontrol.QAscript[Object.keys(DLcontrol.script)[scene]][keyItem]['yes'][1][0];
            DLcontrol.script[Object.keys(DLcontrol.script)[scene]][script][1] = DLcontrol.QAscript[Object.keys(DLcontrol.script)[scene]][keyItem]['yes'][1][1];
        }
        else if(target == 'no') {
            console.log('no')
            DLcontrol.ShowNpcScene(Object.keys(DLcontrol.script)[scene],script);
            choices.style.animationPlayState = 'running'
            console.log('keyagain:',keyItem)
            DLcontrol.script[Object.keys(DLcontrol.script)[scene]][script][0] = DLcontrol.QAscript[Object.keys(DLcontrol.script)[scene]][keyItem]['no'][1][0];
            DLcontrol.script[Object.keys(DLcontrol.script)[scene]][script][1] = DLcontrol.QAscript[Object.keys(DLcontrol.script)[scene]][keyItem]['yes'][1][1];
        }
    }
})
