import './less/index.less'
import './less/global.less'
import './font icons/fonts.css'


//function 1 remove node
function removeNode (){
    let remove = document.querySelectorAll(".icon-trash")
    for (let i = 0; i < remove.length; i++) {
        remove[i].addEventListener('click', function (e) {
            console.log('e', e)
            let node = e.target.parentNode;
            node.parentNode && node.parentNode.removeChild(node)
        })
    }
}

removeNode();


//function 2 add node
let input = document.querySelector("input")
let curNode = null; //save the node position to be added

input.oninput = function () {
    console.log('aaaa', input.value);
    localStorage.setItem('myInput', input.value)
}  

// open modal
let add = document.querySelectorAll(".icon-plus")
let modal = document.querySelector(".modal")
for (let i = 0; i < add.length; i++) {
    add[i].addEventListener('click', function (e) {
        curNode = e;
        let top = e.target.offsetTop + 40;
        let left = e.target.offsetLeft -13;
        modal.style.setProperty('display','block')
        modal.style.setProperty('top', top+'px')
        modal.style.setProperty('left', left + 'px')
    })
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
let addButton = document.querySelector(".add")
addButton.addEventListener('click', function(e){
    if (!localStorage.getItem('myInput')) return;
    let inputValue = localStorage.getItem('myInput')
    let parentNode = curNode.target.parentNode.parentNode; 
    if (inputValue.indexOf(',') === -1){
        parentNode.appendChild(createDocumentFragment(inputValue))
    }else {
        let arr = inputValue.split(',')
        for (let i = 0; i < arr.length; i++){
            parentNode.appendChild(createDocumentFragment(arr[i]))
        }
    }
    removeNode();
    curNode = null;
    input.value = '';
    modal.style.setProperty('display', 'none')
})

//cancel submit
let cancelButton = document.querySelector(".cancel")
let closeButton = document.querySelector(".close")
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

//click navbar
let navicon = document.querySelector(".icon-navicon")
let close = document.querySelector(".close1")
let side = document.querySelector(".side")
navicon.addEventListener('click', function (e) {
    side.style.setProperty('display', 'block')
})
close.addEventListener('click', function (e) {
    side.style.setProperty('display', 'none')
})



