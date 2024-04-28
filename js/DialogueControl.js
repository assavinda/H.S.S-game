export class DialogueControl {
  constructor() {
    this.script = {
      lobby: [
        [
          `ยินดีต้อนรับคุณผู้มาเยือนยามวิกาล ที่นี่คือ H.S.S. สถานที่ซึ่งรวบรวมเอาไว้ด้วยศิลปะแห่งความงามของการฆ่าฟัน ร้านของพวกเราเต็มไปด้วยสิ่งของสวยงามมากมาย การที่ได้พบเจอกันคุณ คงเป็นเพราะโชคชะตาที่นำพาให้คุณพลัดมาถึงที่นี่แน่ครับ`,
          0
        ],
        [
          `หากไม่เป็นการเสียมารยาท ให้กระผมที่เป็นผู้จัดการได้เป็นผู้นำทางให้คุณได้พบกับความรื่นรมย์รูปแบบใหม่ ในฐานะที่คุณเป็นผู้ถูกเลือกให้ได้เข้ามายังที่แห่งนี้`,
          3
        ],
        [
          `แม้ไม่พร้อม กระผมก็คงต้องขอให้คุณพร้อม ยังไงเสีย เราก็ไม่ได้คาดหวังให้คุณทำตามอำเภอใจหรอกครับ เพราะฉะนั้น ตามกระผมมาเถิดครับ`,
          4
        ],
      ],
      weapons: [
        [
          `ปืนเป็นอาวุธที่พวกคุณคงรู้จักกันดี หาซื้อง่าย ใช้งานง่าย สามารถปลิดชีพสิ่งมีชีวิตได้ด้วยความเร็ว เป็นอาวุธที่เหมาะแก่การล่าพวกมนุษย์ที่ดิ้นรนกระเสือกกระสนหนีอย่างสุดกำลังเพื่อรักษาสิ่งที่พวกมันไม่อยากเสียไปอย่างชีวิตของพวกมัน `,
          0
        ],
        [
          `แน่นอนว่าความรู้สึกเมื่อลั่นไกเป็นสิ่งที่น่าอภิรมย์เป็นอย่างมาก คุณว่ามั้ย? เสียงกรีดร้องที่ดังระงม ใบหน้าเหยเกหวาดกลัว ปัง! เพียงครั้งเดียวคุณก็จะได้รับวัตถุดิบชั้นดีมาครองแล้วล่ะ อ้ะ! แน่นอนว่ารุ่นนี้คือปืนลูกซองนะครับ รุนแรงถึงตายแบบสบายๆ เลยล่ะครับ`,
          3
        ],
        [
          `...`,
          3
        ],
        [
          `นี่คืออาวุธสำหรับการจับมนุษย์ที่ต้องการโดยไม่ให้ ‘ถึงตาย’ มีขนาดใหญ่ทำให้ไม่สามารถเคลื่อนย้ายได้ตามใจชอบและสะดวกมากนัก เมื่อตัวธนูแทงเข้าที่เหยื่อแล้วยากที่จะนำออกหรือหนี ด้วยหัวแบบแหลมที่หากดึงก็จะย้อนแทงเนื้อ ไม่สามารถดึงออกได้โดยง่าย`,
          0
        ],
        [
          `แต่หากต้องการระดับที่รุนแรงและเสี่ยงมากขึ้น คุณก็เลือกใช้หัวแบบหางนกนางแอ่น มันจะทำให้เหยื่อของคุณเสียเลือดเพิ่มมากขึ้นทุกครั้งที่ขยับตัว จนสุดท้ายก็จะเสียเลือดมากจนหนีไปไหนไม่ได้อีก`,
          4
        ],
        [
          `...`,
          4
        ]
      ],
      Collectable: [
        [
          `งานชิ้นนี้ประดับประดาโดยรอบด้วยฟันที่ขัดจนมีความมันวาวสวยงามเทียบเท่าไข่มุกที่พวกคุณชื่นชอบ หัวกะโหลกจะถูกประกอบเข้ากับกระดูกสันหลังส่วนล่างและกระดูกเชิงกราน และตกแต่งเพิ่มความมีชีวิตชีวาด้วยเส้นผมถัก แน่นอนว่าเป็นผมจริงเกรดส่งออกเลยนะครับ ดูสวยงามอย่างน่าประหลาดเลย คุณเห็นด้วยไหม?`,
          0
        ],
        [
          `...`,
          0
        ],
        [
          `หากเปรียบอุ้งเท้าเสือเป็นสิ่งที่น่าสะสม ก็ขอชวนมาชม Naily Nail นิ้วมือมนุษย์ที่ถูกนำมาประดับเรียงเป็นวงกลม เป็นงานสะสมหายากที่ต้องใช้วัตถุดิบจากหลากหลายชีวิต นิ้วแต่ละนิ้วนำมาจากบุคคลที่แตกต่างกันแต่มีการคัดให้ลักษณะคล้ายกันที่สุด เมื่อรวมกันกลับกลายเป็นงานชิ้นหนึ่งที่ดึงดูดสายตาให้มัวเมาละลานตา`,
          0
        ],
        [
          `...`,
          0
        ],
        [
          `เก้าอี้ที่สร้างมาเพื่อความสวยงามโดยไร้ความจำเป็น เป็นหนึ่งในความอภิรมย์ที่จะนำชิ้นส่วนของมนุษย์มาใช้ทำเป็นสิ่งของ โดยใส่ความสร้างสรรค์ลงไป ไม่เน้นการใช้งานเพียงเพราะมีความสวยงามก็เพียงพอ ศิลปินผู้ออกแบบคงมีความสุขจนล้นปรี่ที่งานของเขาเป็นหนึ่งในของสะสมชิ้นยอดเลยล่ะครับ`,
          4
        ],
        [
          `...`,
          0
        ],
        [
          `หนังมนุษย์ย่อมมีเกรดที่แตกต่างกันไป หนังชั้นดีชั้นเลิศของหญิงสาวแรกแย้ม ที่ต้องผ่านกระบวนการผ่าฉีกลอกด้วยความประณีต หนังจะยังคงไว้ซึ่งความชุ่มชื้นมีสัมผัสที่ดี ยิ่งอายุน้อยยิ่งมีความนุ่มที่ยืนยาวกว่า ทำให้มีราคาที่สูง ในขณะที่หนังของตัวที่อายุมากจะแห้งและมีริ้วรอยไม่เรียบเนียนของสินค้าอยู่บ้างจากการสูญเสียความตึงผิวไป ไม่ใช่ตำหนิแต่อย่างใด`,
          0
        ],
        [
          `...`,
          0
        ],
        [
          `มีดตัดกระดาษที่ทำมาจากกระดูกนิ้วของมนุษย์และกระดูกใหญ่ในการนำมาลับให้คม แน่นอนว่ามันคงเข้ามือเวลาใช้งานสุดๆ ในเมื่อมันเป็นกระดูกของพวกคุณเอง คงให้ความรู้สึกชินมือไม่ต่างกับอวัยวะของตัวเองเลยล่ะครับ`,
          3
        ],
        [
          `...`,
          0
        ]
      ],
      meatShop:[
        [
          `ในโซนสุดท้ายนี้ ขอเสนอให้รู้จักกับร้านขายเนื้อของทางเรา เนื้อมนุษย์เกรดดีที่ผ่านกระบวนการชำแหละ เก็บรักษาด้วยความสะอาดและปลอดเชื้อที่สุด ที่นี่มีเนื้อหลากหลายส่วนให้คุณได้เลือกสรร เชิญหรรษากับรสชาติที่เลิศหรูของทางเราได้เลยครับ`,
          0
        ],
        [
          `...`,
          0
        ],
        [
          `เลือกชมเสร็จแล้วหรือครับ? ในเมื่อคุณเป็นแขกพิเศษสำหรับพวกเราในค่ำคืนนี้ กระผมจึงอยากมอบของฝากดีๆ ให้คุณกลับไปเป็นของขวัญ คุณต้องการที่จะรับน้ำใจของกระผมไปหรือไม่ครับ?`,
          0
        ],
        [
          `3`,
          0
        ]
      ],
      end: [
        `ไม่เป็นไรครับ ก็ดีที่จะไม่ต้องมีพิธีรีตองอะไรมาก\nขอบคุณนะครับที่หลงเข้ามาเป็นวัตถุดิบของเรา`,
        `ขอบคุณนะครับที่หลงเข้ามาเป็นวัตถุดิบของเรา`
      ]
    };

    this.QAscript = {
        Collectable:{
            skull: {
                yes: [`เป็นอย่างที่คุณว่า ของสะสมชิ้นนี้ดูสวยงามจริงๆ`,
                [`กระผมเห็นด้วย ช่างสวยงาม ดูมีชีวิตและน่าสะสม... มนุษย์ก็เป็นแบบนี้แหละครับ`
                ,3]
                ],
                no: [`ฉันไม่คิดว่าการเห็นหัวของมนุษย์วางอยู่จะน่าอภิรมย์เท่าไร`,
                [`ว้าว…ผมตกใจเลยล่ะครับ นึกว่าพวกมนุษย์จะชอบอะไรแบบนี้ซะอีก ก็แหม เห็นว่าหัวสัตว์สะสมก็เป็นสิ่งที่พวกคุณชอบใช้ตกแต่งวางอวดเบ่งฐานะร่ำรวยกันนี่ น่าประหลาดใจจริง ๆ เลยนะครับที่เพิ่งมารู้สึกสะเทือนใจอะไรตอนนี้....`
                ,2]
                ]
            },
            finger: {
                yes: [`มันเป็นงานศิลปะ… ฉันเข้าใจ`,
                [`งานศิลปะ “ชั้นยอด” คุณเข้าใจถูกแล้วล่ะครับ เจ็บจี๊ดๆ ได้ใจเลยนะครับที่กล้าบอกว่าเข้าใจ`
                ,3]
                ],
                no: [`มันเทียบกันได้หรือ นิ้วของเรากับนิ้วของพวกคุณ?`,
                [`แล้วมันต่างกันอย่างไรครับ คุณคิดว่ามนุษย์มีสิทธิ์เหนือทุกสิ่งมีชีวิตรึไง นิ้วคุณสูงส่งมาจากที่ไหนกันนะครับ`
                ,1]
                ]
            },
            chair: {
              yes: [`คุณไม่คิดว่าสิ่งนี้คือการผลิตที่สิ้นเปลืองหรือ`,
              [`ไม่นะครับ ทีพวกมนุษย์ยังใช้กระดูกของพวกเราอย่างไร้แก่นสารเลย การนำโครงร่างพวกคุณมาทำเก้าอี้ก็ถือเป็นการให้เกียรติกันแล้วครับ`
              ,2]
              ],
              no: [`เป็นการออกแบบที่สร้างสรรค์ดี`,
              [`รสนิยมของคุณดีใช่เล่น ดูเป็นการเอาตัวรอดที่ขบขันเมื่อมองไปยังเศษซากเพื่อนร่วมสายพันธุ์แล้วยังคงช่างจ้อได้`
              ,3]
              ]
            },
            leather: {
              yes: [`พวกคุณชอบสะสมอะไรแบบนี้ด้วยหรือ`,
              [`แน่นอนครับ ผิวหนังของมนุษย์ถึงจะใช้นุ่งห่มไม่ได้ แต่กระนั้นพวกเราก็นิยมนำมาขึงแสดงเพื่อความสวยงาม ไร้ประโยชน์แต่ก็ใช้อวดเบ่งได้ดี`
              ,0]
              ],
              no: [`ฉันรู้สึกไม่ค่อยดีกับสิ่งนี้นัก`,
              [`คุณเป็นคนมีอารมณ์ขันนะครับ ผิวของพวกคุณต่างอะไรกับหนังของพวกเรางั้นหรือ? ลองคิดดูสิครับ`
              ,1]
              ]
            },
            knife: {
              yes: [`ชินมือ…ฮ่ะฮะ อาจจะจริงอย่างที่คุณว่า`,
              [`กระผมดีใจที่เห็นคุณยอมรับมันได้นะครับ`
              ,0]
              ],
              no: [`ฉันว่ามันค่อนข้างใจร้ายที่จะพูดแบบนั้น`,
              [`อย่างนั้นหรือครับ คุณเคยคิดแบบนั้นตอนใช้สินค้าจากกระดูกของพวกเราบ้างหรือไม่ล่ะครับ อย่าพูดเหมือนตัวเองเป็นคนดีขนาดนั้นสิครับ กระผมเสียใจแย่`
              ,1]
              ]
            }
        },
        meatShop:{
          meatgift: {
            yes: [`รับ`,
            [`ขอบคุณนะครับ นี่คือชิ้นเนื้อที่ดีที่สุดในร้านของเรา ของขวัญชิ้นสุดท้ายสำหรับคุณผู้ที่จะไม่ได้กลับออกไป`
            ,3]
            ],
            no: [`ไม่รับ`,
            [`...`
            ,3]
            ]
          }
        }
    };

    this.actions = {
      0: "Normal",
      1: "Doubt",
      2: "Shock",
      3: "Smile",
      4: "Tried",
    };

  }

  async ShowNpcScene(scene,script) {
    let npcScene = document.getElementById('npc-scene');

    let zoombtn = document.getElementById('zoombtn')
    let zoombtn2 = document.getElementById('zoombtn2')
    zoombtn.style.display = 'none'
    zoombtn2.style.display = 'none'

    let darkBg = document.getElementById('dark-bg');
    darkBg.onanimationiteration = () => {
      darkBg.style.animationPlayState = 'paused'
    }

    let npc = document.getElementById('npc');
    npc.src = `../assets/Character/Normal.png`;
    npc.onanimationiteration = () => {
      npc.style.animationPlayState = 'paused'
    }

    let dialogueBox = document.getElementById('dialogueBox');
    dialogueBox.onanimationiteration = () => {
      dialogueBox.style.animationPlayState = 'paused'
    }

    let nextbtn = document.getElementById('next-btn');
    nextbtn.style.display = 'none';

    npcScene.classList.remove('hidden');
    return new Promise((resolve) => {

      setTimeout(() => {
        darkBg.style.animationPlayState = 'running'
        setTimeout(() => {
          npc.style.animationPlayState = 'running'
          setTimeout(() => {
            dialogueBox.style.animationPlayState = 'running'
            setTimeout(() => {
              this.NpcTalk(scene,script)
            },1000)
          },100)
        },100)
      },500)
    })
    
  }

  async NpcTalk(scene,script) {
    let text = document.getElementById('text');
    text.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`
    this.GenerateText(scene,script)
    this.NpcAction(scene,script)

    let currentScene = scene
    if(currentScene == 'Collectable') {
      const itemImages = document.getElementById('item-images');
      itemImages.style.animationName = 'none';
      itemImages.style.opacity = 1
      if(script == 0) {
        itemImages.src = "../assets/Page2/กะโหลก.png"
        itemImages.style.opacity = 0
        setTimeout(() => {
          itemImages.style.animationName = 'skullfade';
          itemImages.style.animationPlayState = 'running';
        },0)
      }
      else if(script == 2) {
        itemImages.src = "../assets/Page2/นิ้ว.png"
        itemImages.style.opacity = 0
        setTimeout(() => {
          itemImages.style.animationName = 'skullfade';
          itemImages.style.animationPlayState = 'running';
        },0)
      }
      else if(script == 4) {
        itemImages.src = "../assets/Page2/เก้าอี้กระดูก.png"
        itemImages.style.opacity = 0
        setTimeout(() => {
          itemImages.style.animationName = 'skullfade';
          itemImages.style.animationPlayState = 'running';
        },0)
      }
      else if(script == 6) {
        itemImages.src = "../assets/Page2/หนัง.png"
        itemImages.style.opacity = 0
        setTimeout(() => {
          itemImages.style.animationName = 'skullfade';
          itemImages.style.animationPlayState = 'running';
        },0)
      }
      else if(script == 8) {
        itemImages.src = "../assets/Page2/มีดกระดูก.png"
        itemImages.style.opacity = 0
        setTimeout(() => {
          itemImages.style.animationName = 'skullfade';
          itemImages.style.animationPlayState = 'running';
        },0)
      }
    }
  }

  async GenerateText(scene,scripts) {
    let currentScene = scene
    let currentScript = this.script[currentScene][scripts][0]
    let text = document.getElementById('text');

    console.log('scene',scene ,'script',scripts)
    let nextbtn = document.getElementById('next-btn');
    nextbtn.style.display = 'none';

    let char = 0
    let TextInterval = setInterval(() => {
      text.innerHTML += currentScript.charAt(char)
      char++;
      
      if (char >= currentScript.length) {
        PauseGenerateText(TextInterval);
        nextbtn.style.display = 'block';
        if(scene == 'meatShop') {

          let key = 'meatgift'
          console.log('key = ',key)
          localStorage.setItem('key',key)
  
          if(scripts == 2) {
            const choices = document.getElementById('choices');
            choices.classList.remove('hidden')
            choices.style.animationPlayState = 'running'
            console.log(this.script['meatShop'])
            nextbtn.style.display = 'none';
          }
          else if(scripts >= 3) {
            console.log(this.script['meatShop'])
          }
        }
      }
    },10);

    function PauseGenerateText(Interval) {
      clearInterval(Interval);
    }

  }

  async NpcAction(scene,script) {
    let action = this.actions[this.script[scene][script][1]];
    let npc = document.getElementById('npc');
    npc.src = `../assets/Character/${action}.png`;
  }

  async EndNpcScene() {
    
    let text = document.getElementById('text');
    text.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...`

    let darkBg = document.getElementById('dark-bg');
    darkBg.onanimationiteration = () => {
      darkBg.style.animationPlayState = 'paused'
    }
    darkBg.style.animationPlayState = 'running';

    let npc = document.getElementById('npc');
    npc.onanimationiteration = () => {
      npc.style.animationPlayState = 'paused'
      npc.style.opacity = 0;
    }
    npc.style.animationPlayState = 'running';

    let dialogueBox = document.getElementById('dialogueBox');
    dialogueBox.onanimationiteration = () => {
      dialogueBox.style.animationPlayState = 'paused'
    }
    dialogueBox.style.animationPlayState = 'running';

    let currentScript = localStorage.getItem('currentScript')
    let currentScene = localStorage.getItem('currentScene');
    let currentSceneKey = Object.keys(this.script)[currentScene];
    let npcScene = document.getElementById('npc-scene');
    if (currentSceneKey == 'meatShop' && currentScript >= 2){
      const scene = document.getElementById('meatShop')
      scene.classList.add('hidden')
      npcScene.classList.add('hidden');
      const qascene = document.getElementById('qa-scene');
      qascene.classList.add('hidden');

      const jumpscare = document.getElementById('jumpscaresound')
      jumpscare.play()
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        npcScene.classList.add('hidden');
      },700)
    })
  }

}
