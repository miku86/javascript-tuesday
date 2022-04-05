// const tobi = {
//     name: "tobi",
//     age: 31,
// }


// const michael = {
//     name: "michael",
//     age: 35,
// }

// const mario = {
//     name: "mario",
//     age: 39,
// }

// tobi["city"] = "simmozheim"
// console.log(tobi)

class Person {
    #name;
    #age;
    #city;

    get name() {
        return "hello " + this.#name
    }

    get age() {
        return this.#age
    }

    set age(value) {
        this.#age = value
    }

    get city() {
        return this.#city
    }

    set city(value) {
        this.#city = value
    }

    constructor(a, b, c) {
        this.#name = a;
        this.#age = b;
        this.#city = c;
    }
}
const personTobi = new Person("tobi", 31, "simmozheim")
const personMario = new Person("mario", 39, "simmozheim")
const personMichael = new Person("michael", 35, "simmozheim")
console.log(personMichael.name)
console.log(personMario.name)
console.log(personTobi.name)