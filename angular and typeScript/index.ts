console.log("tayyaba hi \n")

let name:string = "car"

console.log(name + "\n")
console.log(name.indexOf("r"))

console.log("arr of object \n")
let arr = [];
let obj = {
    name :  "tayyaba",
    age :  20
 }

 arr.push(obj)
 console.log(arr + "\n")

 let MyNumbers : number[]=[26,34,5,29,20];
 console.log(MyNumbers[3]);
 console.log(MyNumbers);

 console.log("\n foreach loop")
 //foreach
 MyNumbers.forEach((item,i) =>{
     console.log(i+ " => " + item)
    })
    console.log("\n for loop")
//for
for (let index = 0; index < MyNumbers.length; index++) {
    const element = MyNumbers[index];
    console.log(index +  " => " + element)

}

