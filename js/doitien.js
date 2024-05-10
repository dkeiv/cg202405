const $ = (id) => document.getElementById(id)
const _RATE = 25000

const convertVNDtoUSD = (vnd) => vnd / _RATE
const convertUSDtoVND = (usd) => usd * _RATE
const displayResult = (result) => $('displayResult').innerHTML = `Result: ${result}`

const convertHandler = () => {
    const from = $('fromCurrency').value
    const to = $('toCurrency').value
    const amount = +$('amount').value

    if (from === to) displayResult(amount)
    if (from === 'vnd' && to === 'usd') displayResult(convertVNDtoUSD(amount))
    if (from === 'usd' && to === 'vnd') displayResult(convertUSDtoVND(amount))
}