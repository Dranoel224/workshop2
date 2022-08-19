// OPERATORS
// Arithmetic => +, -, *, /, % (BODMAS)
// Logical operators  => ||, &&, !, ?, ??
// Ternary operators => a ? b : c
// Conditionals => (if, ternary) (a ? b : c)

// let condition = false;
// if(condition) {
//     //does something
// }// else is optional
// else {
//     //do another
// }
// always executes


// LOOPS
//  let counter = 0+1;
//   while(counter<10){
//       console.log("Counter is ", counter);
//       counter ++;
//   }

//   for(let counter = 0+1; counter <= 10; counter++){
//       console.log("Counter in for is ", counter);
//     }

//  //For loops
//  for(initialization; condition; increment/decrement){}
//  for(;true;){}

//  initialization
//  for(;condition;){
//      increment/decrement
//  }


//EXERCISE on loops
// let drum = []; //STACKS
// let items = 20;
// let labels = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S"]

// for(let item = 1; item <= items; item++){
//     let val = {
//         [labels[item-1]]:item}; // Objects are key:value pairs
//     drum.push(val)
//     console.log("Item in for is ", item);
//     console.log("Finally, drum in for is ", drum);
//   }


let drum = []; //STACKS
//let items = 20;
let labels = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T"];
//labels = document.getElementById("labels");

for (let item = 1; item <= labels.length; item++) {
    if(item%2==0){
        let val = {
            [item]: labels[item - 1]
        };
        //console.log({[labels[item - 1]]: item});
        drum.push(val)
    }
     // Objects are key:value pairs
    
    console.log("Item in for is ", item);
    console.log("Finally, drum in for is ", drum);
}



const person = {
    fristName: "MASSA",
    lastName: "Leonard",
    fullName: function () {
        return this.fristName + " " + this.lastName;
    },
}
console.log(person.fullName( ));

const member = {
    fristName: "NJIE",
    lastName: "Amos",
    fullName: function () {
        return this.fristName + " " + this.lastName;
    },
}
let fullName = person.fullName();
console.log(fullName);
let fullName1 = member.fullName.bind(person);
console.log(fullName1());


let user = [
    { name: "KAMBANG", gender: "Male" },
    [54, 55, { isInstructor: true }],
    {
        isInstructor: false,
        progress: [75, 83, 90],
        showProgress: function () {
            console.log(this.progress);
        }
    }
]
console.log(user[2].progress);
console.log(user[1][2].isInstructor);
console.log(user[2].isInstructor);
