#String
test = "Test"


#Array/List
array = ["name", "alter"]
array.append("wohnort")
#array.remove("name")
del array[0]

#Object/Dictionary
object = {
    "name": "Tobias",
    "alter": 31,
}
object["wohnort"] = "Simmozheim"
del object["name"]
print(object)
