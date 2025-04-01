//Destructuring

let person = {
    name: "rora",
    age: 20,
};

//let name = person.name;
//let age = person["age"];

//객체에서 키값을 뽑아서 사용할 수 있다.-> 키값의 변수가 만들어진다
let { name, age } = person;

console.log(age, name);

//배열을 활용한 예제
let array = [1, 2, 3, 4];
//let [a, b] = array;
//console.log(a, b);

let [a, b, ...rest] = array;
console.log(rest);
