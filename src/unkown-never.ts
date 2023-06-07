//unknown은 any랑은 다르다
// 좀 더 제한적이기 때문에 any보다는 더 나은 선택일 수 있다.
let userInput: unknown; //무엇을 입력할지 모른다.
//무엇을 입력할지 모르기 때문에 무엇이든 입력할 수 있다.
userInput = 5;
userInput = "dfdf"

//never 타입
//아무것도 반환하지 않을 때 -> void와 비슷하지만 의도를 더 명확하게 할 수 있다
function generateError (message: string, code: number): never {
    throw {message : message, errorCode: code};
}

generateError("test Error",500)