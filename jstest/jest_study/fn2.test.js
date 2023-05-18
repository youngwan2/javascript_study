
const fn = require('./fn2');



let num = 0;


// beforeEach() 매처는 각 테스트 케이스의 검사 이전에 실행
// 되어 콜백함수 내의 명령어를 실행한다.
beforeEach(() => {
    num = 0;
})


// 테스트 케이스
test("0더하기 1은 1이야", () => {
    num = fn.add(num, 1);
    expect(num).toBe(1);
});

test("0더하기 2은 2이야", () => {
    num = fn.add(num, 2);
    expect(num).toBe(2);
});

test("0더하기 3은 3이야", () => {
    num = fn.add(num, 3);
    expect(num).toBe(3);
});

test("0더하기 4은 4이야", () => {
    num = fn.add(num, 4);
    expect(num).toBe(4);
});

test("0더하기 5은 5이야", () => {
    num = fn.add(num, 5);
    expect(num).toBe(5);
});

test("0더하기 6은 6이야", () => {
    num = fn.add(num, 6);
    expect(num).toBe(6);
});