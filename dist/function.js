function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result : " + num);
}
printResult(add(5, 12));
//함수의 타입 정의
//함수를 정의할 변수는 앞에서 미리 선언해주는 경우 함수에 대한 타입 정의를 할 수 있다.
//()안에는 매개변수를 => 오른쪽에는 return 값을 정의해주면 된다.
let combineValue;
combineValue = add;
console.log(combineValue(8, 8));
//콜백함수 타입 정의하기
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(20, 40, (result) => {
    console.log("콜백함수 타입 정의하기 : ", result);
});
