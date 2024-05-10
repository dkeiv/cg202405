const $ = id => document.getElementById(id)

const add = (a, b) => a + b
const sub = (a, b) => a - b
const mul = (a, b) => a * b
const div = (a, b) => b !== 0 ? a / b : false

const displayResult = (des, result) => $('displayResult').innerHTML = `Result ${des} ${result}`
const getNumbers = () => [+$('firstNumber').value, +$('secondNumber').value]

const addHandler = () => {
    const [fn, sn] = getNumbers()
    const rs = add(fn, sn)
    displayResult('Add', rs)
}
const subHandler = () => {
    const [fn, sn] = getNumbers()
    const rs = sub(fn, sn)
    displayResult('Sub', rs)
}
const mulHandler = () => {
    const [fn, sn] = getNumbers()
    const rs = mul(fn, sn)
    displayResult('Mul', rs)
}
const divHandler = () => {
    const [fn, sn] = getNumbers()
    if (sn === 0) displayResult('Ko chia dc cho: ', sn)
    else {
        const rs = div(fn, sn)
        displayResult('Div', rs)
    }
}