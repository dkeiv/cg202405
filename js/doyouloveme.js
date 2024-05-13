const random = (from, to) => Math.floor(Math.random() * (to - from)) + from

const onClickYes = () => alert("<3")

const onMouseNo = () => {
    const pos = [random(0, 500), random(0, 500)]
    document.getElementById("btnNo").style.left = pos[0] + 'px'
    document.getElementById("btnNo").style.top = pos[1] + 'px'
}