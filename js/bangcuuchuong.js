const main = () => {
    let code = ''
    code += `<table><tbody>`
    for (let i = 1; i < 10; i++) {
        code += `<tr>`
        for (let j = 1; j < 10; j++) {
            code += `<td>${i} * ${j} = ${i * j}</td>`
        }
        code += `</tr>`
    }
    code += `</tbody></table>`
    document.getElementById("container").innerHTML = code
}