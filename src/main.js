import './less/index.less'
import './less/global.less'
import './font icons/fonts.css'


//function 1 remove node
function removeNode (){
    let remove = document.querySelectorAll(".icon-trash")
    for (let i = 0; i < remove.length; i++) {
        remove[i].addEventListener('click', function (e) {
            let node = e.target.parentNode;
            node.parentNode && node.parentNode.removeChild(node)
        })
    }
}
removeNode();

//function 2 add node
let curNode = null; //save the node position to be added  

// open modal
function openModal(){
    let add = document.querySelectorAll(".icon-plus")
    let modal = document.querySelector(".modal")
    for (let i = 0; i < add.length; i++) {
        add[i].addEventListener('click', function (e) {
            curNode = e;
            localStorage.setItem('myInput', '')
            let top = e.target.offsetTop + 40;
            let left = e.target.offsetLeft - 13;
            modal.style.setProperty('display', 'block')
            modal.style.setProperty('top', top + 'px')
            modal.style.setProperty('left', left + 'px')
        })
    }
}
openModal();


//enter input
let input = document.querySelector("input")
    input.oninput = function () {
    localStorage.setItem('myInput', input.value)
}

// create dom node 
function createDocumentFragment(txt) {
    const template = `<div class="osType">
                        <span>${txt}</span>
                        <i class="icon-trash"></i>
                    </div>`;
    let frag = document.createRange().createContextualFragment(template);
    frag.addEventListener('click', function (e) {
        let node = e.target.parentNode;
        node.parentNode.removeChild(node)
    })
    return frag;
}

//comfirm input and submit
function handleSubmit(){
    let addButton = document.querySelector(".add");
    let modal = document.querySelector(".modal")
    addButton.addEventListener('click', function (e) {
        if (!localStorage.getItem('myInput')) return;
        let inputValue = localStorage.getItem('myInput')
        let parentNode = curNode.target.parentNode.parentNode;
        if (inputValue.indexOf(',') === -1) {
            parentNode.appendChild(createDocumentFragment(inputValue))
        } else {
            let arr = inputValue.split(',')
            for (let i = 0; i < arr.length; i++) {
                parentNode.appendChild(createDocumentFragment(arr[i]))
            }
        }
        removeNode();
        curNode = null;
        input.value = '';
        modal.style.setProperty('display', 'none')
    })
}
handleSubmit();


//cancel submit
function handleCancel(){
    let cancelButton = document.querySelector(".cancel")
    let closeButton = document.querySelector(".close")
    let modal = document.querySelector(".modal")
    cancelButton.addEventListener('click', function (e) {
        curNode = null;
        input.value = '';
        modal.style.setProperty('display', 'none')
    })
    closeButton.addEventListener('click', function (e) {
        curNode = null;
        input.value = '';
        modal.style.setProperty('display', 'none')
    })
}

handleCancel();


//click navbar
function handleBarClick() {
    let navicon = document.querySelector(".icon-navicon")
    let close = document.querySelector(".close1")
    let side = document.querySelector(".side")
    navicon.addEventListener('click', function (e) {
        side.style.setProperty('display', 'block')
    })
    close.addEventListener('click', function (e) {
        side.style.setProperty('display', 'none')
    })
}
handleBarClick();

module.exports = removeNode;
module.exports = openModal;
module.exports = createDocumentFragment;
module.exports = handleSubmit;
module.exports = handleCancel;
module.exports = handleBarClick;









