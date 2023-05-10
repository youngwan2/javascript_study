


// // 1차적으로 중복값이 존재하는 인덱스 번호


// let arr = [22, 22, 22, 33, 44, 44]
// let 정렬배열 = []
// let 임시배열 = []

// for (let i = 0; i < arr.length; i++) {
//     임시배열.push(arr[i])
//     console.log(임시배열)
//     if (arr[i] === 임시배열[0] ) {
//         임시배열.splice(1, 임시배열.length - 1)
//         정렬배열 =임시배열
//     }
// }

// console.log(정렬배열)


const arr = [5, 5, 5, 5, 5, 4, 3, 2, 1]

// filter :
// 자기 내부에서 조건을 비교했을 때 True 가 되는 넘들만 새로운 배열에 담아서
// 반환
const filter = arr.filter((num, i) => {
    return (arr.indexOf(num) === i)

})

console.log(filter)

//                          5
// const index = arr.indexOf(arr[0])

// console.log(index)