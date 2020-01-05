const elem = document.querySelector('#input-elem');
const contentElem = document.querySelector('#contents');

elem.addEventListener('keydown', ({ key }) => {
    renderMessage(`keydown event ${key}`);
});

elem.addEventListener('input', () => {
    renderMessage(`input event`);
});

function renderMessage(data) {
    const div = document.createElement('div');
    div.textContent = data;
    contentElem.append(div);
}
