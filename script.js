const h2 = document.createElement("h2");                //creates a <h2><h2> element 
h2.textContent = "This content added by Javascript";    //adds in content to <h2>This content added by Javascript<h2>
document.querySelector("body").appendChild(h2);         //this actually adds the element to the DOM so viewers can see it.