const $todoItems = document.querySelectorAll('.todo-item');
const $body = document.querySelector('body');

const addTooltip = () => {
    $todoItems.forEach((elem) => {

        elem.addEventListener('mouseenter', () => {
            let elemTxt = elem.innerText;           
            const elemOffset = elem.offsetWidth;
            const elemScroll = elem.scrollWidth;
        
            if (elemOffset <= elemScroll) {
                elem.setAttribute('title', elemTxt);
            } else {
                elem.removeAttribute('title');
            }
        })
    })
}

addTooltip();
