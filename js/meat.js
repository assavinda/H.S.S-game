import { DialogueControl } from "./DialogueControl.js";

const DLcontrol = new DialogueControl;

const thispage = document.getElementById('meatShop');
const sign = document.getElementById('meatsign');

const meat0 = document.getElementById('meat0')
const meat1 = document.getElementById('meat1')
const meat2 = document.getElementById('meat2')
const meat3 = document.getElementById('meat3')
const meat4 = document.getElementById('meat4')

sign.onanimationiteration = () => {
    sign.style.animationPlayState = 'paused';
    setTimeout(() => {
        sign.classList.add('hidden')
    },500)
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

        setTimeout(() => {
            for(let i=0;i<=4;i++) {
                let meat = document.getElementById(`meat${i}`)
                if(i >= 2) {
                    meat.style.pointerEvents = 'all'
                }
                else {
                    meat.style.pointerEvents = 'none'
                }
            }
        },2500)
    }
};

const meatItems = [
    `เครื่องใน`,
    `เนื้อแขน`,
    `เนื้อต้นขา`,
    `เนื้อน่อง`,
    `เนื้อสะโพก`,
    `เนื้อสันคอ`,
    `เนื้อหน้าท้อง`,
    `เนื้ออก`,
]

let meatIndex = 0
let viewed = []

meat0.onanimationiteration = () => {
    if(meatItems[meatIndex-2] == null) {
        meat0.style.opacity = 0
        meat0.style.pointerEvents = 'none'
    }
    else {
        meat0.style.opacity = 1
        meat0.style.pointerEvents = 'all'
        meat0.src = `../assets/Page3/MEAT/${meatItems[meatIndex-2]}.PNG`
    }
    meat0.style.animationPlayState = 'paused'
}

meat1.onanimationiteration = () => {
    if(meatItems[meatIndex-1] == null) {
        meat1.style.opacity = 0
        meat1.style.pointerEvents = 'none'
    }
    else {
        meat1.style.opacity = 1
        meat1.style.pointerEvents = 'all'
        meat1.src = `../assets/Page3/MEAT/${meatItems[meatIndex-1]}.PNG`
    }
    meat1.style.animationPlayState = 'paused'
}

meat2.onanimationiteration = () => {
    meat2.src = `../assets/Page3/MEAT/${meatItems[meatIndex]}.PNG`
    meat2.style.animationPlayState = 'paused'
}

meat3.onanimationiteration= () => {
    if(meatItems[meatIndex+1] == null) {
        meat3.style.opacity = 0
        meat3.style.pointerEvents = 'none'
    }
    else {
        meat3.style.opacity = 1
        meat3.style.pointerEvents = 'all'
        meat3.src = `../assets/Page3/MEAT/${meatItems[meatIndex+1]}.PNG`
    }
    meat3.style.animationPlayState = 'paused'
}

meat4.onanimationiteration = () => {
    if(meatItems[meatIndex+2] == null) {
        meat4.style.opacity = 0
        meat4.style.pointerEvents = 'none'
    }
    else {
        meat4.style.opacity = 1
        meat4.style.pointerEvents = 'all'
        meat4.src = `../assets/Page3/MEAT/${meatItems[meatIndex+2]}.PNG`
    }
    meat4.style.animationPlayState = 'paused'
}

function play() {
    for(let i=0;i<=4;i++) {
        const meat = document.getElementById(`meat${i}`)
        meat.style.animationPlayState = 'running'
    }
}

const descriptImage = document.getElementById('desimg')
const descriptDiv = document.getElementById('meatdes')

thispage.addEventListener('click',(e) => {
    if(e.target.classList.contains('meats')) {
        if(e.target.id == 'meat3') {
            meatIndex++;
            for(let i=0;i<=4;i++) {
                let meat = document.getElementById(`meat${i}`)
                meat.style.animationName = 'meats'
            }
            play()
            console.log(meatIndex)
        }
        else if(e.target.id == 'meat1') {
            meatIndex--;
            for(let i=0;i<=4;i++) {
                let meat = document.getElementById(`meat${i}`)
                meat.style.animationName = 'meatsrv'
            }
            play()
            console.log(meatIndex)
        }
        else if(e.target.id == 'meat2') {
            descriptDiv.classList.remove('hidden')
            descriptDiv.style.pointerEvents = 'all'
            back.style.display = 'block'
            descriptImage.style.animationPlayState = 'running'
        }
        descriptImage.src = `../assets/Page3/แผ่นอธิบายเนื้อ/แผ่น_${meatItems[meatIndex]}.png`
    }
})

const back = document.getElementById('backbtn3')

back.addEventListener('click',() => {
    descriptDiv.classList.add('hidden')
    descriptDiv.style.pointerEvents = 'none'
    back.style.display = 'none'
    if(viewed.includes(meatItems[meatIndex]) == false) {
        viewed.push(meatItems[meatIndex])
        console.log('pushed : ',meatItems[meatIndex],'\nviewed length : ',viewed.length)
    }
    if(viewed.length >= meatItems.length) {
        let currentScript = localStorage.getItem('currentScript')
        let currentScene = localStorage.getItem('currentScene');
        let currentSceneKey = Object.keys(DLcontrol.script)[currentScene];
        currentScript++;
        localStorage.setItem('currentScript',currentScript)
        DLcontrol.ShowNpcScene(currentSceneKey,currentScript)
    }
    console.log('viewed length : ',viewed.length)
    console.log(meatItems.length)
})