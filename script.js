// let inpts = document.querySelectorAll('input')
// let btns = document.querySelector('button')

// inpts.forEach(inpt => {
//     btns.onclick = () => {
//         inpts.forEach(item => {
//             if(item.value.length > 5){
//                 item.classList.add("inp_p")
//             }else{
//                 item.classList.add("inp")
//             }
//         })
//     }
// })
let goods = document.querySelector('.good')
let bads = document.querySelector('.bad')


let father = document.querySelector('.father')
let btns = document.querySelector('button')
let inpts_all = []
let texts_all = []


let left = father.querySelector('.left')
let inpts_left = left.querySelectorAll('input')
let text_left = left.querySelectorAll('span')


let right = father.querySelector('.right')
let inpts_right = right.querySelectorAll('input')
let text_right = right.querySelectorAll('span')


inpts_all.push(...inpts_left, ...inpts_right)
texts_all.push(...text_left, ...text_right)

let num = []
let min = []

inpts_all.forEach(inpt => {
    btns.onclick = () => {
        function start() {
            num = 0
            min = 0

            inpts_all.forEach(item => {
                if (item.value.length >= 4) {
                    item.classList.remove("inp_p")
                    item.classList.add("inp")
                    btns.style.backgroundColor = "#4200FF"
                    btns.style.border = "2px solid #4200FF"
                    btns.style.color = "white"
                    num++
                    goods.innerHTML = num
                } else {
                    item.classList.remove("inp")
                    item.classList.add("inp_p")
                    btns.style.backgroundColor = "red"
                    btns.style.border = "2px solid #4200FF"
                    btns.style.color = "white"
                    min++
                    bads.innerHTML = min
                    // btns.style.marginTop = "80px"
                }
            })
        }
        setTimeout(start, 1000)
        
        
        
    }
})


