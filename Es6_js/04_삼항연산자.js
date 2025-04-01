//Es6에 포함되지는 않지만, 많이 사용된다.
let person = { name: "rora", age: 20 };

if (person) {
    console.log(person.name);
} else {
    console.log("there is no person");
}

//리액트에서 사용하는 삼항연산자
let person2 = { name: "rora_choi", age: 20 };
console.log(person2 ? person2.name : "there is no person");
