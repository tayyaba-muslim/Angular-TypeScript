console.log("tayyaba hi \n");
var name = "car";
console.log(name + "\n");
console.log(name.indexOf("r"));
console.log("arr of object \n");
var arr = [];
var obj = {
    name: "tayyaba",
    age: 20
};
arr.push(obj);
console.log(arr + "\n");
var MyNumbers = [26, 34, 5, 29, 20];
console.log(MyNumbers[3]);
console.log(MyNumbers);
console.log("\n foreach loop");
//foreach
MyNumbers.forEach(function (item, i) {
    console.log(i + " => " + item);
});
console.log("\n for loop");
//for
for (var index = 0; index < MyNumbers.length; index++) {
    var element = MyNumbers[index];
    console.log(index + " => " + element);
}
