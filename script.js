// const grandparent = document.querySelector(".grandparent")
// const parent = document.querySelector(".parent")
// const child = document.querySelector(".child")

// grandparent.addEventListener('click', e => {
//     console.log(e.target);
    
// })

// grandparent.addEventListener('click', e => {
//     console.log("Grandparent Capture");
    
// }, { capture: true }
// )  

// grandparent.addEventListener('click', e => {
//     console.log("Grandparent Bubble");
    
// }
// )

// parent.addEventListener('click', e => {
//     // e.stopPropagation()
//     console.log("Parent Capture");
    
// }, { capture: true }
// )  

// parent.addEventListener('click', e => {
//     console.log("Parent Bubble");
    
// } // , { once: true }
// )

// parent.addEventListener("click", printHi)

// parent.addEventListener('click', e => {
//         // e.stopPropagation()
//         console.log("Yahallo");
        
//     }
// )  

// setTimeout(() => {
//     parent.removeEventListener("click", () => {
//         // e.stopPropagation()
//         console.log("Yahallo");
        
//     })
// }, 2000)

// child.addEventListener('click', e => {
//     console.log("Child Capture");
    
// }, { capture: true }
// )  

// child.addEventListener('click', e => {
//     // e.stopPropagation()
//     console.log("Child Bubble");
// }
// )

// document.addEventListener('click', e => {
//     console.log("Document Capture");
    
// }, { capture: true }
// )  

// document.addEventListener('click', e => {
//     console.log("Document Bubble");
    
// }
// )

// grandparent.addEventListener('click', e => {
//     console.log("Grandparent 1");
    
// })

// parent.addEventListener('click', e => {
//     console.log("Parent 1");
    
// })

// child.addEventListener('click', e => {
//     console.log("Child 1");
    
// })

// document.addEventListener('click', e => {
//     console.log("Document 1");
    
// })

// function printHi() {
//     console.log("Yahallo");
    
// }

const divs = document.querySelectorAll('div')

// divs.forEach(div => {
//     div.addEventListener("click", () => {
//         console.log('bello')
//     })
// })

// document.addEventListener("click", e => {
//     if (e.target.matches('div')) {
//     console.log("Bello");
//     }
// })

addGlobalEventListener("click", "div", e => {
    console.log("Bello");
})

function addGlobalEventListener(type, selector, callback)   {
    document.addEventListener("click", e => {
        if (e.target.matches(selector)) callback(e)
    })
}

const newDiv = document.createElement('div')
newDiv.style.width = "300px"
newDiv.style.height = "300px"
newDiv.style.backgroundColor = "purple"
document.body.append(newDiv)