const fn = require('./fn')

// test('1은 1이야', () => {
//     // expect 에는 검증할 값을 넣어주고, toBe 에는 결과로 예상되는 값을 넣어준다. 
//     expect(1).toBe(1);
// });


// test('2+3은 5야', () => {
//     expect(fn.add(2, 3)).toBe(5);
// });


// // 객체의 경우에는 재귀적으로 돌면서 검사를 수행하므로
// // toEqual 을 사용해야 한다.
// // 또한 생성한 객체가 undefined 일 수 있으므로
// // 보다 더 엄격한 검사를 실시하는 toStrictEqual 을 사용하는 것이 좋다. 
// test('객체의 속성으로 name을 생성하고, 값으로 kim을 추가한다.', () => {
//     expect(fn.makeUserName('kim')).toStrictEqual("kim")
// })


// toBeGreaterThan : ~~ 보다 크면 pass 한다.
test("4는 3보다 크다", () => {
    const num = 4;

    expect(num).toBeGreaterThan(3);
})

// toBeGreaterThanEqual : ~~ 이상이면 pass

test("4와 4는 같다.", () => {
    const num = 4;
    expect(num).toBeGreaterThanOrEqual(4);
})

// toBeLessThan() : ~~ 보다 작으면 pass

test("num은 4 보다 작다.", () => {
    const num = 3;

    expect(num).toBeLessThan(4);
})

// toBeLessThanOrEuqal() : ~  이하 이면 pass
test("num은 3 이하 이다.", () => {
    const num = 3;
    expect(num).toBeLessThanOrEqual(3);
})

//toBeCloseTo()
test("0.1 + 0.2 는 0.3 이다.", () => {
    expect(0.1 + 0.2).toBeCloseTo(0.3)
})


//toMatch() : 정규표현식에 매칭되는 문자가 있으면 pass 한다.
test("Hellow World 에 H 라는 문자가 있다.", () => {

    expect("Hellow world").toMatch(/H/);
})

//toContain() : 배열의 요소에서 해당하는 요소가 존재하면 pass
test("유저 리스트에는 Kim이 존재한다.", () => {
    const userList = ["Kim", "young", "wan"]
    expect(userList).toContain("Kim")
})

