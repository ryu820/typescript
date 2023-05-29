function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    const result = n1 + n2
    if (showResult) {
        console.log(phrase + result)
    } else {
        return result
    }
} 

//타입추론 : 아래처럼 변수가 특정 값으로 선언이 되어 있는 경우
// 타스가 변수의 자료형을 추론할 수 있기 때문에 따로 타입선언을 해주지 않아도 된다!
//let number = 5와 const number = 5는 값을 다르게 추론하는데 
// let의 경우에는 지금 number 타입이 선언되어 있기 때문에 number라고 추론하고
// const의 경우에는 값을 다시 선언할 수 없는 자료형이기 때문에 5라는 값을 추론한다.
// 만약 let a; 와 같이 값을 할당하지 않고 변수만 선언하는 경우에는 자료형을 선언해주어야 한다.
const number1 = 5;
const number2 = 10;
const prontResult = true
const resultPhrase = "Result is : "

//만약 let resultPhrase = "Result is : "와 같이 문자열을 선언해둔 변수에 
// resultPhrase = 0 처럼 숫자를 재할당해주면 자료형이 다르기 때문에 에러가 반환된다

add(number1, number2, prontResult, resultPhrase);
