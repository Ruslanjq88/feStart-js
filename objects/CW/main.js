const cryptoW = {
    uName: "Ruslan",
    btc: {
        currencyN: "Bitcoin",
        logo: "<i class='fa-solid fa-bitcoin-sign'></i>",
        amount: 2,
        rate: 24524.70
    },
    eth: {
        currencyN: "Ethereum",
        logo: "<i class='fa-brands fa-ethereum'></i>",
        amount: 3,
        rate: 1894.71
    },
    xlm: {
        currencyN: "Stellar",
        logo: "<i class='fa-brands fa-gg-circle'></i>",
        amount: 6,
        rate: 0.13
    },
    show: function (curN) {
        document.getElementById("infoC").innerHTML = `Добрый день, ${this.uName}! На вашем балансе ${this[curN].currencyN} ${this[curN].logo} осталось ${this[curN].amount} монет, если вы сегодня продадите их то, получите ${this[curN].amount * this[curN].rate * 37} грн.`
    }
}

cryptoW.show("eth")
