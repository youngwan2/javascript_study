

const date = new Date();

// console.log(date)
// console.log(`한국 표준시 : `, date.toTimeString())
// console.log(`현재 시간 : `, date.getHours())
// console.log(`현재 요일 : `, date.getDay())

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const min = date.getMinutes();
const sec = date.getSeconds();

console.log(`${year}년 ${month +1}월 ${day}일 ${hour}시 ${min}분 ${sec}초`)