const get = el => document.querySelector(el)
const create = el => document.createElement(el)

get(".btn").addEventListener("click", function() {
    this.setAttribute("disabled", true)
    startP()
})

function startP() {
    const field = create("div")
    const input = create("input")
    const sub = create("button")
    field.style = `display: flex; justify-content: center; margin-bottom: 30px;`
    input.placeholder = "Circle diameter"
    input.style = `outline: 0; border-radius: 8px; border: 2px solid #333; margin-right: 5px;`
    sub.innerHTML = "Draw"
    sub.className = "btn btn-primary"
    document.body.append(field)
    field.append(input, sub)
    sub.addEventListener("click", () => {
        let diam = parseInt(input.value)
        if (!diam || diam <= 0) {
            return
        } else {
            for(let row = 0; row < 10; row++) {
                const circleRow = create("div")
                circleRow.style = `display: flex;`
                for(let amo = 0; amo < 10; amo++) {
                    let color = Math.floor(Math.random() * 360)
                    const circle = create("div")
                    circle.className = "circ"
                    circle.style = `width: ${diam}px; height: ${diam}px; border-radius: 50%; background-color: hsl(${color}, 100%, 50%);`
                    circleRow.append(circle)
                }
                document.body.append(circleRow)
            }
            const circles = document.querySelectorAll(".circ")
            let arrCircles = Array.from(circles)
            arrCircles.forEach(el => {
                el.onclick = () => {
                    el.remove()
                }
            })
        }
    })
}
