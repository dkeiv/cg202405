const inputNumber = (mess) => +prompt(mess)
const random = (max) => Math.floor(Math.random() * max)

const main = () => {
    const range = inputNumber("Nhap khoang muon doan")
    const rs = random(range)
    console.log(rs)

    let answer = null
    let tryCount = 0;
    while (rs !== answer && tryCount < 3) {
        let answer = inputNumber("Nhap so ban doan")
        if (rs > answer) alert(`${answer} be hon kq`)
        if (rs < answer) alert(`${answer} lon hon kq`)
        tryCount++
    }
    if (rs === answer) alert(`Ban da doan dung`)
    else alert(`Het luot choi`)
    return 0
}