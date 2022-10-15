// variables
let [milliseconds, seconds, minutes] = [0, 0, 0]
let int = null
const getId = id => document.querySelector(id)
const timeP = getId("#timePlace")

// styles
getId("body").style = "height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; overflow: hidden;"
getId("#container").style = "display: flex; flex-direction: column; justify-content: center; align-items: center; width: 400px; height: 400px; border: 6px solid #96ceb4; border-radius: 50%; margin-top: 10px;"
getId("#allB").style = "margin-top: 40px;"
timeP.style = "font-size: 2em"
const btns = document.querySelectorAll("button")
btns.forEach((btn) => {
    btn.style = "width: 120px; height: 40px; outline: 0; border: 0; background: #b5e7a0; color: #454140; font-size: 16px; cursor: pointer; border-radius: 16px;"
})

// main code
getId("#btn_start").addEventListener("click", () => {
    if (int !== null) {
        clearInterval(int)
    }
    int = setInterval(mainTime,10)
})

getId("#btn_stop").addEventListener("click", () => {
    clearInterval(int)
})

getId("#btn_reset").addEventListener("click", () => {
    [milliseconds, seconds, minutes] = [0, 0, 0]
    clearInterval(int)
    timeP.innerHTML = "00 : 00 : 00"
})

function mainTime() {
    milliseconds += 10
    
    if (milliseconds === 1000) {
        milliseconds = 0
        seconds++
        if (seconds === 60) {
            seconds = 0
            minutes++
        } 
    }
    let m = minutes < 10 ? "0" + minutes : minutes
    let s = seconds < 10 ? "0" + seconds : seconds
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ?
    "0" + milliseconds : milliseconds

    timeP.innerHTML = `${m} : ${s} : ${ms}`
}
