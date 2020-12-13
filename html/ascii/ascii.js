
const NORMAL_SPEED = 150;
const TURBO_SPEED = 80;
const textarea = document.getElementById('text-area');
const animation = document.getElementById('animation');
const fontSize = document.getElementById('fontsize');
const speed = document.getElementById('turbo');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');

startBtn.onclick = onStartBtnClick;
stopBtn.onclick = onStopBtnClick;
animation.onchange = animationChanged;
fontSize.onchange = fontSizeChanged;
turbo.onchange = speedChanged;

var state = {
    speed: speed.checked ? TURBO_SPEED : NORMAL_SPEED,
    intervalId: null,
    text: null,
    index: 0,
    size: 'medium',
    frames: null,
}

function animationChanged() {
    state.frames = ANIMATIONS[animation.value].split("=====\n");
    state.index = 0;
}

function fontSizeChanged() {
    state.size = fontSize.value
    textarea.style.fontSize = state.size;
}

function speedChanged() {
    state.speed = speed.checked ? TURBO_SPEED : NORMAL_SPEED;
    startAnimationInterval();
}

function startAnimationInterval() {
    state.text = textarea.value;
    if (state.intervalId) {
        clearInterval(state.intervalId);
    }
    if (!state.frames) {
        animationChanged();
    }
    state.intervalId = setInterval(function () {
        textarea.value = state.frames[state.index++];
        if (state.index == state.frames.length) {
            state.index = 0;
        }
    }, state.speed);
}

function stopAnimationInterval() {
    if (!state.intervalId) return;
    state.index = 0;
    clearInterval(state.intervalId);
}

function onStartBtnClick() {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    startAnimationInterval();
}

function onStopBtnClick() {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    stopAnimationInterval();
}
