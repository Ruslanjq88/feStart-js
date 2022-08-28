const data = [
    {
        baseCurrency: "UAH",
        currency: "USD",
        saleRateNB: 15.0564130,
        purchaseRateNB: 15.0564130
    },
    {
        baseCurrency: "UAH",
        currency: "BYR",
        saleRateNB: 0.0013900,
        purchaseRateNB: 0.0013900
    },
    {
        baseCurrency: "UAH",
        currency: "EUR",
        saleRateNB: 18.7949200,
        purchaseRateNB: 18.7949200
    },
    {
        baseCurrency: "UAH",
        currency: "GEL",
        saleRateNB: 8.1500890,
        purchaseRateNB: 8.1500890
    }
]

for (let i = 0; i < data.length; i++) {
    let cur = data[i].currency
    let pur = data[i].purchaseRateNB
    let sa = data[i].saleRateNB
    const root = document.querySelector("#root")
    root.innerHTML += `${cur} ${pur} / ${sa} <br>`
}
