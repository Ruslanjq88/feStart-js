let log = prompt("Enter your login")

if (log === "Админ") {
    let pas = prompt("Enter your password")

    if (pas === "Чёрный Властелин") {
        document.write("Добро пожаловать!")
    } else if (pas !== "Чёрный Властелин" && pas !== null) {
        document.write("Пароль неверен")
    } else {
        document.write("Вход отменён")
    }
} 

else {
    document.write("Вход отменён")
}
