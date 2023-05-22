const fn3ForEach = require('./fn3')




const mockCallback = jest.fn((number)=>{
    return number +"를 반환합니다."
});



// 테스트 설계

test('목 함수는 21을 인수로 두 번 반환한다.',()=>{
    
    fn3ForEach([21,21], mockCallback)

    expect(mockCallback.mock.calls).toBe
})



