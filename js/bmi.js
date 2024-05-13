const $ = (id) => document.getElementById(id)

const onClickHandler = () => {
    const weight = $("weight").value
    const height = $("height").value
    const bmi = weight / ( height ^ 2 )

    if (bmi < 18)
        $("result").innerHTML = "Underweight"
    else if (bmi < 25.0)
        $("result").innerHTML = "Normal"
    else if (bmi < 30.0)
        $("result").innerHTML = "Overweight"
    else
        $("result").innerHTML = "Obese"
}