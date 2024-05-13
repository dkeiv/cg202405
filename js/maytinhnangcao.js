const keys = [
    ['1', '2', '3', '+'],
    ['4', '5', '6', '-'],
    ['7', '8', '9', 'x'],
    ['C', '0', '=', '/']
]

const $ = (id) => document.getElementById(id)
const onClearClick = () => $("result").value = ''
const onResultClick = () => $("result").value = eval($("result").value)
const onKeyClick = (value) => $("result").value += value

const init = () => {
    let code = ''
    for (let i = 0; i < keys.length ; i++) {
        code += `<tr>`
        for (let j = 0; j < keys[0].length; j++) {
            if (keys[i][j] === 'C')
                code += `<td><button value="${keys[i][j]}" onclick="onClearClick()">${keys[i][j]}</button></td>`
            else if (keys[i][j] === '=')
                code += `<td><button value="${keys[i][j]}" onclick="onResultClick()">${keys[i][j]}</button></td>`
            else
                code += `<td><button value="${keys[i][j]}" onclick="onKeyClick(this.value)">${keys[i][j]}</button></td>`
        }
        code += `</tr>`
    }
    $("keyPad").innerHTML = code
}