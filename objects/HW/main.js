const doc = {
    title: "",
    body: "",
    footer: "",
    date: "",
    app: {
        title: {

        },
        body: {

        },
        footer: {

        },
        date: {

        }
    },
    fill: function () {
        this.title = "<h1>For a More Creative Brain Follow These 5 Steps</h1> <br>"
        this.body = "<main>Nearly all great ideas follow a similar creative process and this article explains <br> how this process works. Understanding this is important because creative <br> thinking is one of the most useful skills you can possess. Nearly every problem <br> you face in work and in life can benefit from innovative solutions, lateral thinking, <br> and creative ideas......</main> <br>"
        this.footer = "<div>JAMES CLEAR</div> <br>"
        this.date = "<div>17.02.2020</div>"
    },
    show: function () {
        document.getElementById("container").innerHTML = `${this.app.title = this.title} ${this.app.body = this.body} ${this.app.footer = this.footer} ${this.app.date = this.date}`
    }
}

doc.fill()
doc.show()
