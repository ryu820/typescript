"use strict";
//유니언타입
function combine(n1, n2) {
    //유니언 타입을 사용할 때에는 타스가 n1이 유니언타입 자체로 인식하기 때문에
    //아래처럼 if 구문을 사용해서 정리를 해주어야 한다.
    let result;
    if (typeof n1 === "number" && typeof n2 === "number") {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
const conbinedAges = combine(30, 60);
console.log(conbinedAges);
const combinedName = combine("bella", "hyunju");
console.log(combinedName);
//리터럴타입
//타입이 아닌 정확한 값을 가지고 있는 타입 형식이다.
//리터럴타입으로 설정해준 값 외의 다른 값은 허용되지 않는다.
//그렇기때문에 선언한 이후에 스펠링이 틀려서 오류가 발생하는 것을 막을 수 있다.
function combine1(n1, n2, resultConversion) {
    let result;
    if (typeof n1 === "number" && typeof n2 === "number" || resultConversion === "as-number") {
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
const combinedName1 = combine1("bella", "hyunju", "as-text");
console.log(combinedName);
function combine2(n1, n2, resultConversion) {
    let result;
    if (typeof n1 === "number" && typeof n2 === "number" || resultConversion === "as-number") {
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
function greet(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
