// 1
const extractNumbers = (str) => {
    return str.match(/\d/g).map(Number);
}

console.log(extractNumbers("a1fg5hj6"));

// 2
const fibonacciNumber = (a = 0, b = 1) => {
    if(a <= 144) {
        console.log(a)
    }
    setTimeout(() => {
        fibonacciNumber(b, a + b)
    },1000)
}
fibonacciNumber()

// 3
let i  = 0

const id = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()

        data.forEach(() => {
            const {title} = data[id]
            console.log(title)
        })
    } catch (error) {
        console.log(error)
    }
}

id()

// 4

const buttons = document.querySelectorAll('button')

buttons.forEach(item => {
    item.onclick = () => {
        document.body.style.backgroundColor = item.innerHTML
    }
})

// 5

const block = document.querySelector('.block')
const blockBtn = document.querySelector('.blockBtn')

blockBtn.onclick = () => {
    if(block.classList.contains("block")) {
        block.classList.remove('block')
    }else {
        block.classList.add('block')
    }
}

// 6

const one = document.querySelector('p')
let count = 0
let interval;

interval = setInterval(() => {
    if (count < 100) {
        count++
        one.innerHTML = count

    }else {
        clearInterval(interval)
    }

},1)

// 7

const btn = document.querySelector('.button')

btn.onclick = async () => {
    const response = await fetch('data.json')
    const data = await response.json()
    console.log(data)
}