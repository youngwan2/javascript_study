


// function forEach(items,callback){
//     for(let i =0; i<items.length; i++){
//         callback(items[i])
//     }
// }


// module.exports = forEach


const ret = [1,2,3,4,5,6,888,666]


const maxValue =ret.reduce((max,num)=>{
    console.log("max:",max, "num:",num)
    return num > max ? num:max
},0 /* 초깃값이 들어감 */)


console.log(maxValue)

