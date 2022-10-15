const nodeListOfPics = document.querySelectorAll("#img")
const arrPics = Array.from(nodeListOfPics)
const get = id => document.querySelector(id)
let curPic = 0
let maxPic = arrPics.length - 1

arrPics.forEach((pic, indx) => {
    pic.style.transform = `translateX(${100 * indx}%)`
})

get("#next").addEventListener("click", () => {    
    subNx()
    
    if (curPic === maxPic) {
        let newLp = arrPics.shift()
        arrPics.push(newLp)
        arrPics[maxPic].transform = `translateX(0%)`
        arrPics.forEach((pic, indx) => {
            pic.style.transform = `translateX(${100 * (indx - maxPic)}%)`
        })
    } else {
        curPic++
        arrPics.forEach((pic, indx) => {
            pic.style.transform = `translateX(${100 * (indx - curPic)}%)`
        })
    }
})

get("#previous").addEventListener("click", () => {
    subPr()

    if (curPic === 0) {
        let newFp = arrPics.pop()
        arrPics.unshift(newFp)
        arrPics.forEach((pic, indx) => {
            pic.style.transform = `translateX(${100 * (indx - curPic)}%)`
        })
    } else {
        curPic--
        arrPics.forEach((pic, indx) => {
            pic.style.transform = `translateX(${100 * (indx - curPic)}%)`
        })
    }
})

const subNx = () => {
    get("#next").disabled = true
    setTimeout(() => {
        get("#next").disabled = false
    }, 500)
}

const subPr = () => {
    get("#previous").disabled = true
    setTimeout(() => {
        get("#previous").disabled = false
    }, 500)
}
