let styles = new Array("Джаз", "Блюз")
styles.push("Рок-н-ролл")

styles[Math.floor(styles.length / 2)] = "Классика"

let sh = styles.shift()
styles.unshift("Рэп", "Регги")


document.write(styles, "<br>" + "Удалённый первый елемент массива : " + sh)
