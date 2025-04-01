//object shorthand assignment

let name = "rora";
let age = "20";

/*
let person = {
    name: name,
    age: age,
};
*/
//키와 벨류 값이 일치하다면 줄여 쓸 수 있다.
let person = { name, age };
console.log(person);
