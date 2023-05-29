var person = {
    name: "bella",
    age: 32,
    hobbies: ["sports", "cooking"],
    role: [2, 'author']
};
//튜플의 경우 자스에는 없지만 타스에는 있는 타입이기 때문에 항상 타입을 명시해주어야 한다.
//튜플의 첫번째 요소는 숫자, 두번째 요소는 문자열이다
//배열에 정확하게 x개의 값이 필요하고 각 값의 타입을 미리 지정해두어야 할 때 사용한다.
var person1 = {
    name: "bella",
    age: 32,
    hobbies: ["sports", "cooking"],
    role: [2, 'author'] //튜플을 의도했지만 자스가 튜플로 인식을 하지 못한다.
};
//위의 person의 경우 명시적으로 person이 객체이며 객체안에 있는 요소들의
// 타입을 선언해주었다. 하지만 아래의 person1에서처럼 타입을 명시해주지 않아도
// 타입스트립트가 타입을 추론해낼 수 있기 때문에 위의 person처럼 타입을 하나하나
// 명시해주지 않아도 괜찮다.
console.log(person);
console.log(person1);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
    //이 경우 person.hobbies가 문자열로 이루어진 배열이기때문에 자동으로 hobby를 문자열로 추론한다.
}
//enum 타입 설정하기
//enum은 자스에는 없고 타스에만 있는 타입이다.
//각각 ADMIN에는 0, READ_ONLY에는 1, AUTHOR에는 2가 할당된다.
//임의로 값을 지정해줄 수도 있으며 ADMIN = 4 이런식으로 수정하면 된다.
//수정했을때 그 다음값들은 자동으로 4보다 하나씩 큰 숫자로 설정된다.
//문자열을 지정해줄수도 있다
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person2 = {
    name: "bella",
    age: 32,
    hobbies: ["sports", "cooking"],
    role: Role.ADMIN
};
console.log(person2.role);
