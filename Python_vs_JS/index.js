// String
const test = "Test"


//Array
const array = ["name", "alter"]
array.push("wohnort")
array.splice(0,1)

//Object
const object = {
    name: "Tobias",
    alter: 31,
}
object["wohnort"] = "Simmozheim"
delete object.name
console.log(object)