
// const fn = {
//     add: (num1, num2) => { return num1 + num2 },
//     connectUserDb: () => {
//         return new Promise(res => {
//             setTimeout(() => {
//                 res({
//                     name: "Mike",
//                     age: 30,
//                     gender: 'male'
//                 });
//             }, 500)
//         })
//     },
// }


// module.exports = fn;


let numbers = '123456444'



console.log(numbers)

let newNumbers = ''

// for(let i=numbers.length-1; i>0; i--){


//     newNumbers+= numbers[numbers.length]
//     if(i+1%3===0){
//       numNumbers+= ','
//     } 

//     console.log()

// }


for(let i=numbers.length; i>0;i--){

    newNumbers += numbers[i]

    if((i+1)%3===0){
        newNumbers+= ','
    }

    console.log(newNumbers)
}
