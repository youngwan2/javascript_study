

//목 함수

const mockFunc = jest.fn();


// 목함수의 반환값을 바꿔준다.
mockFunc.mockReturnValueOnce(10);
mockFunc.mockReturnValueOnce(20);
mockFunc.mockReturnValueOnce(30);
mockFunc.mockReturnValueOnce(40);
mockFunc.mockReturnValueOnce(50);


mockFunc()
mockFunc()
mockFunc();
mockFunc();
mockFunc();

console.log(mockFunc.mock.results)


//
test('dd', () => {
    expect('dd').toBe('dd');
    expect(mockFunc.mock.calls.length).toBe(5);

})
