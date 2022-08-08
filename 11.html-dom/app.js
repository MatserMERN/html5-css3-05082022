//console.log(document)
//console.log(document.getElementById("header"))
// document.getElementById("header").innerText ="<h1>This is added dynamically</h1>"
//debugger;
document.getElementById("header").innerHTML = "<h1>This is added dynamically</h1>"
document.getElementById("header").style.backgroundColor = "yellow"

function clickMe() {
    alert("did you click me ?")
}