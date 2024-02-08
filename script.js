import { images, soundFiles } from './fileNames.js';
const editBtn = document.getElementById('edit-btn');
const buttons = document.getElementById('buttons');
const sounds = document.getElementById('sounds');
const keyBoardArray = ['1', '2', '3', '4', 'q', 'w', 'e', 'r', 'a', 's', 'd', 'f', 'z', 'x', 'c', 'v'];
let btnArray = [];
let activeSoundFile = '';
let activeImageFile = '';
let edit = false;
function createSoundBtn(id) {
    return {
        id: id,
        filename: 'sounds/18076__daven__01_sb_bass_hit_c.wav'
    };
}
function buttonEvent(sBtn) {
    sBtn.style;
}
editBtn.addEventListener('click', () => {
    edit = !edit;
    edit
        ? ((document.body.style.backgroundColor = 'rgb(79,79,79)'),
            (editBtn.style.backgroundColor = 'white'),
            (editBtn.textContent = 'playMode'))
        : ((document.body.style.backgroundColor = 'rgb(0,51,62)'),
            (editBtn.style.backgroundColor = 'greenyellow'),
            (editBtn.textContent = 'Edit mode'));
});
for (let i = 0; i <= 15; i++) {
    const soundBtnObj = createSoundBtn(i);
    const soundButton = document.createElement('div');
    soundButton.id = 'soundButton';
    btnArray.push(soundBtnObj);
    soundButton.addEventListener('click', () => {
        let sound = new Audio(soundBtnObj.filename);
        if (!edit) {
            sound.play().then();
        }
        else {
            soundBtnObj.filename = activeSoundFile;
            soundButton.style.backgroundImage = activeImageFile;
        }
    });
    window.addEventListener('keydown', (e) => {
        if (e.key === keyBoardArray[i]) {
            let sound = new Audio(soundBtnObj.filename);
            document.body.style.backgroundColor = '#202020';
            if (!edit) {
                sound.play().then();
            }
            else {
                soundBtnObj.filename = activeSoundFile;
                soundButton.style.backgroundImage = activeImageFile;
            }
        }
    });
    window.addEventListener('keyup', (e) => {
        if (e.key === keyBoardArray[i])
            document.body.style.backgroundColor = '#282828';
    });
    buttons.append(soundButton);
}
for (let i = 0; i <= images.length; i++) {
    const obj = document.createElement('div');
    obj.id = 'obj';
    obj.style.backgroundImage = `url('img/${images[i]}')`;
    sounds.append(obj);
    const soundPreview = new Audio(`sounds/${soundFiles[i]}`);
    let playing = false;
    obj.addEventListener('click', () => {
        playing = !playing;
        if (!edit) {
            !playing ? soundPreview.pause() : soundPreview.play();
        }
        else {
            !playing ? soundPreview.pause() : soundPreview.play();
            activeImageFile = `url(img/${images[i]})`;
            activeSoundFile = `sounds/${soundFiles[i]}`;
        }
    });
}
//# sourceMappingURL=script.js.map