import { DialogueControl } from "./DialogueControl.js";

const DLcontrol = new DialogueControl

const nextbtn = document.getElementById('next-btn');


nextbtn.addEventListener('click',() => {
    let currentScene = localStorage.getItem('currentScene');
    let currentScript = localStorage.getItem('currentScript');

    let currentSceneKey = Object.keys(DLcontrol.script)[currentScene];

    if (currentScript < DLcontrol.script[currentSceneKey].length - 1) {
        currentScript++;

        DLcontrol.NpcTalk(currentSceneKey,currentScript);

        if(currentSceneKey == 'weapons') {
            if(currentScript == 2) {
                DLcontrol.EndNpcScene()
                const zoom = document.getElementById('zoombtn')
                zoom.style.display = 'block'
                zoom.style.animationPlayState = 'running'
            }
            else if(currentScript == 5) {
                DLcontrol.EndNpcScene()
                const zoom = document.getElementById('zoombtn')
                zoom.style.display = 'block'
                zoom.style.animationPlayState = 'running'
            }
        }
        else if(currentSceneKey == 'Collectable') {
            const qascene = document.getElementById('qa-scene');
            qascene.classList.remove('hidden');
            if(currentScript == 1) {
                let key = 'skull'

                DLcontrol.EndNpcScene()
                const zoom = document.getElementById('zoombtn2')
                zoom.style.display = 'block'
                zoom.style.animationPlayState = 'running'

                const text = document.getElementById('text');
                text.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...`
                console.log('key = ',key)
                localStorage.setItem('key',key)
            }
            else if(currentScript == 3) {
                let key = 'finger'

                DLcontrol.EndNpcScene()
                const zoom = document.getElementById('zoombtn2')
                zoom.style.display = 'block'
                zoom.style.animationPlayState = 'running'
                
                const text = document.getElementById('text');
                text.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...`
                console.log('key = ',key)
                localStorage.setItem('key',key)
            }
            else if(currentScript == 5) {
                let key = 'chair'

                DLcontrol.EndNpcScene()
                const zoom = document.getElementById('zoombtn2')
                zoom.style.display = 'block'
                zoom.style.animationPlayState = 'running'
                
                const text = document.getElementById('text');
                text.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...`
                console.log('key = ',key)
                localStorage.setItem('key',key)
            }
            else if(currentScript == 7) {
                let key = 'leather'

                DLcontrol.EndNpcScene()
                const zoom = document.getElementById('zoombtn2')
                zoom.style.display = 'block'
                zoom.style.animationPlayState = 'running'

                const text = document.getElementById('text');
                text.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...`
                console.log('key = ',key)
                localStorage.setItem('key',key)
            }
            else if(currentScript == 9) {
                let key = 'knife'

                DLcontrol.EndNpcScene()
                const zoom = document.getElementById('zoombtn2')
                zoom.style.display = 'block'
                zoom.style.animationPlayState = 'running'
                
                const text = document.getElementById('text');
                text.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...`
                console.log('key = ',key)
                localStorage.setItem('key',key)
            }
        }
        else if(currentSceneKey == 'meatShop') {
            if(currentScript == 1) {
                DLcontrol.EndNpcScene()
            }
        }
        localStorage.setItem('currentScene', currentScene)
        localStorage.setItem('currentScript',currentScript);
    }
    else{
        DLcontrol.EndNpcScene()
        if (currentSceneKey != 'weapons') {
            NextPage();
        }
    }
    
})



export function NextPage() {
    let currentScene = localStorage.getItem('currentScene');

    let currentSceneKey = Object.keys(DLcontrol.script)[currentScene];
    setTimeout(() => {
        let currentPage = document.getElementById(currentSceneKey);
        setTimeout(() => {
            currentPage.style.animationPlayState = 'running';
        },200)
        setTimeout(() => {
            currentPage.classList.add('hidden')
            setTimeout(() => {
                currentScene++;
                localStorage.setItem('currentScene',currentScene);
                localStorage.setItem('currentScript',0);
                console.log('go to next page')
                console.log(currentSceneKey)

                currentSceneKey = Object.keys(DLcontrol.script)[currentScene];
                let nextpage = document.getElementById(currentSceneKey);
                nextpage.classList.remove('hidden')
                setTimeout(() => {
                    nextpage.style.animationPlayState = 'running';
                },500)
            },100)
        },600)
    },500)
}

window.addEventListener('click',(e) => {
    const yes = document.getElementById('yes');
    const no = document.getElementById('no');
    let scene = localStorage.getItem('currentScene');
    let script = localStorage.getItem('currentScript');

    let target = e.target.id
    let keyItem = localStorage.getItem('key');

    if(Object.keys(DLcontrol.script)[scene] == 'Collectable' || Object.keys(DLcontrol.script)[scene] == 'meatShop') {
        yes.innerHTML = DLcontrol.QAscript[Object.keys(DLcontrol.script)[scene]][keyItem]['yes'][0];
        no.innerHTML = DLcontrol.QAscript[Object.keys(DLcontrol.script)[scene]][keyItem]['no'][0];
        if(target == 'yes') {
            console.log('yes')
            localStorage.setItem('ans',1)
            if(Object.keys(DLcontrol.script)[scene] == 'Collectable') {
                DLcontrol.ShowNpcScene(Object.keys(DLcontrol.script)[scene],script);
            }
            else if(Object.keys(DLcontrol.script)[scene] == 'meatShop') {
                script++;
                localStorage.setItem('currentScript',script)
                const gift = document.getElementById('gift')
                gift.classList.remove('hidden')
                gift.style.animationPlayState = 'running'
                setTimeout(() => {
                    DLcontrol.NpcTalk(Object.keys(DLcontrol.script)[scene],script);
                },500)
            }
            choices.style.animationPlayState = 'running'
            console.log('keyagain:',keyItem)
            DLcontrol.script[Object.keys(DLcontrol.script)[scene]][script][0] = DLcontrol.QAscript[Object.keys(DLcontrol.script)[scene]][keyItem]['yes'][1][0];
            DLcontrol.script[Object.keys(DLcontrol.script)[scene]][script][1] = DLcontrol.QAscript[Object.keys(DLcontrol.script)[scene]][keyItem]['yes'][1][1];
        }
        else if(target == 'no') {
            console.log('no')
            localStorage.setItem('ans',0)
            if(Object.keys(DLcontrol.script)[scene] == 'Collectable') {
                DLcontrol.ShowNpcScene(Object.keys(DLcontrol.script)[scene],script);
            }
            else if(Object.keys(DLcontrol.script)[scene] == 'meatShop') {
                NextPage()
                DLcontrol.EndNpcScene()
            }
            choices.style.animationPlayState = 'running'
            console.log('keyagain:',keyItem)
            DLcontrol.script[Object.keys(DLcontrol.script)[scene]][script][0] = DLcontrol.QAscript[Object.keys(DLcontrol.script)[scene]][keyItem]['no'][1][0];
            DLcontrol.script[Object.keys(DLcontrol.script)[scene]][script][1] = DLcontrol.QAscript[Object.keys(DLcontrol.script)[scene]][keyItem]['yes'][1][1];
        }
    }
})
