let containerEl = document.getElementById("container").onmouseenter = function(){
    this.style.backgroundColor = "green";
    this.style.border = "5px solid orange";
    this.style.transform = "scale(1.1)";

    let counter = 0;
for(; counter <=100; counter+=5){
    if(counter%10 == 0? counter:undefined){
        console.log(counter);
    }
    return counter;
}
}

containerEl = document.getElementById("container").onmouseleave = function(){
    this.style.backgroundColor = "green";
    this.style.border = "5px solid orange";
    this.style.transform = "scale(1.0)";

}

containerEl = document.getElementById("container").onmouseout = function(){
    this.style.backgroundColor = "white";
    this.style.border = "1px solid black";
    this.style.transform = "scale(0.2)";
}
