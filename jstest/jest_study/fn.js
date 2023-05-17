const fn = {
    add: (num1, num2) => { return num1 + num2 },
    makeUserName: (name) => { return fn.name = name },
    makeUserAge: (age) => { return  fn.age = age }
};


fn.makeUserName("kim");
fn.makeUserAge(500);

console.log(fn.name)
console.log(fn.age)

console.log(fn)
module.exports = fn;

