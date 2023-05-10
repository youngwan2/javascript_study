//10 만 번의 주사위를 던져서




let 확률조작할눈금 = Number(prompt(`확률을 바꿀 눈금을 1~6 사이에서 하나 입력하세요`))
let 너가져 = Number(prompt(`해당 눈금에 더할 수를 입력하세요.`))
let 백만 = 100000

let one = 0;
let two = 0;
let three = 0;
let four = 0;
let five = 0;
let six = 0;



for (let i = 0; i < 90000; i++) {
    const random = Math.floor(Math.random() * 6) + 1

    if (random === 1) {
        one++;
    }

    if (random === 2) {
        two++
    }
    if (random === 3) {
        three++
    }
    if (random === 4) {
        four++
    }
    if (random === 5) {
        five++
    }
    if (random === 6) {
        six++
    }

}

console.log
    (`one:${one} 1이 나올 확률:${one / 백만 * 100}% |
two:${two} 2가 나올 확률:${two / 백만 * 100}% |
three:${three} 3이 나올 확률:${three / 백만 * 100}% |
four:${four} 4가 나올 확률:${four / 백만 * 100}% |
five:${five} 5가 나올 확률:${five / 백만 * 100}% |
six:${six} 6이 나올 확률:${six / 백만 * 100}% `
    )

const total = Math.floor(one / 백만 * 100 + two / 백만 * 100 + three / 백만 * 100 + four / 백만 * 100 + five / 백만 * 100 + six / 백만 * 100)

console.log(5 / 6 * 100)


