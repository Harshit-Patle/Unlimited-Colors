
const randomcolor = function () {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}
// console.log(randomcolor());
let Intv;
document.querySelector('#start').addEventListener('click', function () {
    if (!Intv) {
        Intv = setInterval(startChange, 1000)
    }
})

const stop = document.querySelector('#stop').addEventListener('click', function () {
    clearInterval(Intv)
    Intv = null
})

const startChange = function () {
    document.body.style.backgroundColor = randomcolor()
}