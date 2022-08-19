//  1.) Function Literal Notation 
// Function definition 

function printName(name) {
    console.log(arguments);
    console.log("My name is ", name)
}

//Function invokation/call/call-site
printName("Person");


class human {
    constructor() {
        this.age = 45;
        this.gender = "Male";
        this.height = "1.9m";
        //console.log(this);
    }

}
console.log(this);


//  2.) Function Expression (First class functions) 
const printName2 = function () {

}



// Pass by value and pass by reference.
// 3.) (lamda) (arrow) functions (Because the maintainers of javascript discovered that the arrow functions, they took ...)
// 4.) Constructor functions
// 5.) Factory functions
// 6.) Closures
// 7.) IIFE

//let shapeSite = document.getElementsById("container");

function countDownClock(counter = 60) {
            /*switch (counter) {
                case counter % 2 == 0:
                    document.getElementsById("container").innerHTML.style.background = "yellow";
                    break;
                case counter < 10:
                    document.getElementsById("container").innerHTML.style.background = "red";
                    break;
                case counter % 5 == 0:
                    document.getElementsById("container").innerHTML.style.background = "green";
                    break;
                    default:
            }
            */

            if (counter % 2 == 0) {
                document.getElementsById("container").style.backgroundColor = "yellow";
            } else if (counter % 5 == 0) {
                document.getElementsById("container").style.backgroundColor = "green";
            } else if (counter < 10) {
                document.getElementsById("container").style.backgroundColor = "red";
            }
            console.log(counter);
        }
