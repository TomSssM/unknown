const elem = document.querySelector('#input-elem');
const contentElem = document.querySelector('#contents');

elem.addEventListener('keydown', ({ key }) => {
    renderMessage(`keydown event ${key}`);
});

elem.addEventListener('input', ({ inputType }) => {
    renderMessage(`input event: ${inputType}`);
});

function renderMessage(data) {
    const div = document.createElement('div');
    div.textContent = data;
    contentElem.append(div);
}
