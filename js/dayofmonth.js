const $ = (id) => document.getElementById(id)

const onClickHandler = () => {
    const month = $("month").value

    switch (month) {
        case '1':
        case '3':
        case '5':
        case '7':
        case '8':
        case '10':
        case '12':
            $("result").innerHTML = `Thang ${month} co 31 ngay`
            break
        case '4':
        case '6':
        case '9':
        case '11':
            $("result").innerHTML = `Thang ${month} co 30 ngay`
            break
        case '2':
            $("result").innerHTML = `Thang ${month} co 28 hoac 29 ngay`
            break
        default:
            $("result").innerHTML = `Khong co thang ${month}`
    }
}