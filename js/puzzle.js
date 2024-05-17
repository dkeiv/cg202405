const images = [
    ["11", "12", "13", "14", "15"],
    ["21", "22", "23", "24", "25"],
    ["31", "32", "33", "34", "35"]
]

const $ = (id) => document.getElementById(id)
const random = (from, to) => Math.floor(Math.random() * (to - from)) + from

const onClickHandle = (id) => {
    const rn = random(0, images.length)
    const index = id.match(/[0-9]+/) // img1 => 1

    $(id).innerHTML = images[rn][index]
    
    if (isMatch()) $("result").innerHTML = `IT IS MATCHED`
    else $("result").innerHTML = ''
}

const isMatch = () => {
    let tmp = []
    for (let i = 0; i < 5; i++) {
        tmp.push($(`img${i}`).innerHTML)
    }

    for (let i = 0; i < images.length; i++) {
        if (JSON.stringify(images[i]) === JSON.stringify(tmp)) return true
    }
    return false
}

const init = () => {
    let code = ''

    code += `<ul>`
    for (let i = 0; i < 5; i++) {
        let rn = random(0, 3)
        code += `<li id="img${i}" onclick="onClickHandle(this.id)">${images[rn][i]}</li>`
    }
    code += `</ul>`

    $("container").innerHTML += code
}
