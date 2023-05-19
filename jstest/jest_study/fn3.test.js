
const fn = require('./fn3');

// 목 함수
const mockFn = jest.fn();

mockFn();
mockFn(1);


// .only 옵션을 추가하면 해당 옵션이 붙은 테스트만 실행한다.
test("1+1=2", () => {
    expect(1 + 1).toBe(2)
})

test.skip("1+2=3", () => {
    expect(1 + 2).toBe(3)
})



