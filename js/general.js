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

