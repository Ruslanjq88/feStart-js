const btn = document.createElement("button")
btn.innerHTML = "Click to make div"
btn.classList.add("btn_style")
const mainBtn = document.querySelector("#main_btn")
mainBtn.appendChild(btn)
let count = 0
btn.onclick = () => {
    const divs = document.querySelector("#divs")
    const div = document.createElement("div")
    count++
    div.innerHTML = `Hello, I'm div ${count}`
    div.classList.add("div_style")
    divs.appendChild(div)
    checkAmo()
}

const checkAmo = () => {
    const divs = document.querySelector("#divs")
    let Amo = divs.childNodes.length
    if (Amo === 10) {
        count = 0
        while(divs.firstChild) {
            divs.firstChild.remove()
        }
    }
}
