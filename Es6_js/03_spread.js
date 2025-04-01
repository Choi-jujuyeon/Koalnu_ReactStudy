//spread
let person = { name: "rora", age: 20 };

//person가 복사를 해서 새로운 객체를 생성하는 개념
let person2 = { ...person };
console.log(person2);
console.log(person == person2);

//person의 주소값을 가져가 복사하는 개념
let person3 = person;
console.log(person3);
console.log(person == person3);

//주소 값을 복사한 객체에 값을 변경 및 추가할 수 있다
let person4 = { ...person, addresss: "incheon", name: "roroa_choi" };
console.log(person4);

//배열을 활용한 복사 예제
let a = [1, 2];
let b = [...a, 3];
let c = [...a, ...b];
console.log(c);
