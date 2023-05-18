
const fn = {
    add: (num1, num2) => { return num1 + num2 },
    connectUserDb: () => {
        return new Promise(res => {
            setTimeout(() => {
                res({
                    name: "Mike",
                    age: 30,
                    gender: 'male'
                });
            }, 500)
        })
    },
}


module.exports = fn;

