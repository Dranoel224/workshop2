const nameInput = document.querySelector("#user_name");
const emailInput = document.querySelector("#user_email");
const passwordInput = document.querySelector("#user_password");
const formInput = document.querySelector("#register_form");
const submitBtn = document.querySelector("#submitBtn");
const formEl = document.querySelector(".register_form");

let dataContainer = [];
let userName = "";
let userEmail = "";
let userPassword = "";


nameInput.addEventListener("keydown", ((e) => {
    const name = e.target.value;
    if (name.length < 3) {
        nameInput.style.border = "1px solid red";
    } else if (name.length >= 3) {
        nameInput.style.border = "1px solid green";
    }
    userName = name;
    renderVisible();
    console.log(e.target.value);
}))

emailInput.addEventListener("keydown", ((e) => {
    const email = e.target.value;
    /*/ if (email.length ) {
    //     emailInput.style.border = "1px solid red";
    // } else if (email.length >= 3) {
    //     emailInput.style.border = "1px solid green";
    // }*/
    userEmail = email;
    renderVisible();
    console.log(e.target.value);
}))

passwordInput.addEventListener("keydown", ((e) => {
    const password = e.target.value;
    if (password.length < 8) {
        passwordInput.style.border = "1px solid red";
    } else {
        passwordInput.style.border = "1px solid green";
    }
    userPassword = password;
    renderVisible();
    console.log(e.target.value);
}))

const renderVisible = () => {
    if(userName.length >= 3 && userPassword.length >= 8){
        submitBtn.disabled = false;
    }
}

 formEl.addEventListener("submitBtn", ((e) =>{
     e.preventDefault();
     let completeUser = {
        name: userName,
        email: userEmail,
        password: userPassword
     }

     const theUser = dataContainer.find((user) => user.email === completeUser.email);
     if(theUser){
         return alert("Email already in use.")
     }

     dataContainer.push(completeUser);
     localStorage.setItem("user1", JSON.stringify(completeUser));
     userName.value = "";
     userEmail.value = "";
     userPassword.value = "";
     //window.location.href = "../login.html"
     console.log(dataContainer);
 })) 

 let user1 = localStorage.getItem("user1");
 if(user1 === null){
     completeUser = [];
 } else{
     completeUser = JSON.parse(user1)
 }



 //LEVEL FOUR (4) EXERCISES (NodeJS Basics).
 //TASK: Shopping cart management at Santa Lucia;
 //=> Write a controller class that manages customers shopping cart at santa Lucia. The controller should expose the following endpoints:
 //     1) Add a single or multiple items to the shopping cart;
 //     2) Modify an item's quantity in the shopping cart. If the quantity is zero(0), item should be removed from the cart automatically.
 //     3) Remove single or multiple items from the shopping cart;
 //     4) Get the total cost of items in the shopping cart.
 // Shopping cart should have {itemName, Quantity, Unit-cost, Description}.