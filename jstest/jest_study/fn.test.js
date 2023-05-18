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


// // toBeGreaterThan : ~~ 보다 크면 pass 한다.
// test("4는 3보다 크다", () => {
//     const num = 4;

//     expect(num).toBeGreaterThan(3);
// })

// // toBeGreaterThanEqual : ~~ 이상이면 pass

// test("4와 4는 같다.", () => {
//     const num = 4;
//     expect(num).toBeGreaterThanOrEqual(4);
// })

// // toBeLessThan() : ~~ 보다 작으면 pass

// test("num은 4 보다 작다.", () => {
//     const num = 3;

//     expect(num).toBeLessThan(4);
// })

// // toBeLessThanOrEuqal() : ~  이하 이면 pass
// test("num은 3 이하 이다.", () => {
//     const num = 3;
//     expect(num).toBeLessThanOrEqual(3);
// })

// //toBeCloseTo()
// test("0.1 + 0.2 는 0.3 이다.", () => {
//     expect(0.1 + 0.2).toBeCloseTo(0.3)
// })


// //toMatch() : 정규표현식에 매칭되는 문자가 있으면 pass 한다.
// test("Hellow World 에 H 라는 문자가 있다.", () => {

//     expect("Hellow world").toMatch(/H/);
// })

// //toContain() : 배열의 요소에서 해당하는 요소가 존재하면 pass
// test("유저 리스트에는 Kim이 존재한다.", () => {
//     const userList = ["Kim", "young", "wan"]
//     expect(userList).toContain("Kim")
// })

// // toThrow() : 에러가 발생하면 통과한다.
// test("에러 발생 함?",()=>{
//     expect(()=>fn.throwError()).toThrow();
// });


/* -----------------비동기 코드 테스트 */

// done (): Jest 에서 제공하는 테스트용 콜백함수로
// 해당 테스트가 종료되었음을 알리는 메서드이다.
// test("3초 후에 받아온 이름은 Mike 이다.", (done) => {
//     const callback = (name) => {
//         try {
//             expect(name).toBe("Mike");
//             done();
//         } catch (error) {
//             done();
//         }
//     }
//     fn.getName(callback)
// })

// promise() 메서드를 활용하여 비동기 코드를 테스트

// test("3초 후에 받아온 유저의 나이는 30 이다", () => {

//     // 일반적인 프로미스 반환 활용
//     return fn.getAge().then(age => {
//         expect(age).toBe(30)
//     })

//     // jest 에서 제공하는 resolves 사용

//     return expect(fn.getAge()).resolves.toBe(30)
// })

// test("3초 후에 error 가 발생한다.",()=>{
    
//     expect(fn.getAge()).rejects.toMatch("error 메시지가 발생합니다.")

// })

/* async ~ await 을 사용하는 경우 */
// test("3초 뒤에 받을 유저의 나이는 30 이다.",async()=>{

//     // 1번째 방법
//     const age = await fn.getAge();
//     expect(age).toBe(30) 

//     // 2번째 방법

//     await expect(fn.getAge).resolve.toBe(30);
// })

