// As a newly recruited senior software engineer at Nestle, write a program that does the following.
// 1. Fills a carton of Nestle with with 10 tins of milk
// 2. label each tin of milk with a random name selected from the dataset of names.
//NOTE: tins can have the same name.
// The dataset of names is given below.

// Names= ["Alpha milk", "baby food", "Best milk", "BMIC", "OMIM"]

let carton = [];
let stickers = [
    "Alpha milk",
    "Baby food",
    "Best milk",
    "BMIC",
    "OMIM",
    "Double chocolate",
    "Strawberry",
    "Vanilla",
    "Low fat milk",
    "Banana milk"
];


for (let tin = 1; tin <= stickers.length; tin++) {
    let results = {
        tin: stickers[tin - 1]
    };
    carton.push(results);
}
console.log(carton);


//SOLUTION (ALGORITHM)
/*   * Empty carton
     * Label each tin of milk
        * Randomely Select names for dataset
        * Assign the names as label for the tin of milk
     * Fill this carton with labeled tins of milk */

let carton1 = [];
let names = [
    "Alpha milk",
    "Baby food",
    "Best milk",
    "BMIC",
    "OMIM",
    "Double chocolate",
    "Strawberry",
    "Vanilla",
    "Low fat milk",
    "Banana milk"
];
for (let ele = 1; ele <= 20; ele++) {
    let colorByIndex = Math.floor(Math.random() * names.length);
    let name = names[colorByIndex];


    // * Assign the names as label for the tin of milk
    let tinOfMilk = {
        [name]: ele
    };
    
    ele % 2 == 0? tinOfMilk.color = "red": tinOfMilk.color = "green";
    ele % 2 == 0? tinOfMilk.Gender = "Male": tinOfMilk.Gender = "Female";

   // let str = JSON.stringify(tinOfMilk);
   // tinOfMilk = JSON.parse(str);


    // * Fill this carton with labeled tins of milk
    carton1.push(tinOfMilk);

    //ele % 2 == 0? tinOfMilk.color = "red": tinOfMilk.color = "green"
    //tinOfMilk = JSON.parse(str);

    if (colorByIndex % 2 == 0) {
        document.getElementById("displayColors").style.color = "red";
    } else {
        document.getElementById("displayColors").style.color = "green";
    }

    let disDom = JSON.stringify(carton1);
    let convertBack = JSON.parse(disDom)
    document.getElementById("displayColors").innerHTML += name + "<br>";
    //document.getElementById("displayColors").innerHTML += ele + "<br>";

    //tinOfMilk["Gender"] = "Male";

};
console.log(carton1);
//document.getElementById("displayColors").innerHTML = ele + "<br/>";

// ASSIGNMENT : From the make results, the EVEN elements appear RED and the ODD elements to appear GREEN.



// QUICK EXERCISE
let str1 = ["A", "B", "C", "D", "E"];
// Let the results be the reverse of the Array
let rStr =[];

for(let index = str1.length - 1; index >= 0; index--){
    rStr.push(str1[index]);
}

console.log(rStr);
document.getElementById("reverseForLoop").innerHTML += rStr + "<br>";

for(let i in str1.reverse){
    console.log(i);
}


