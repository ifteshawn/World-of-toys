// reads and stores user input from subscription form for display on new window
function displayInfo() {
    localStorage.setItem("name", document.getElementById("name").value);
    localStorage.setItem("age", document.getElementById("age").value);
    localStorage.setItem("gender", document.getElementById("gender").value);
    localStorage.setItem("origin", document.getElementById("origin").value);
    localStorage.setItem("email", document.getElementById("email").value);
    localStorage.setItem("comments", document.getElementById("comments").value);
    localStorage.setItem("interests", document.getElementById("interests").value);
}

//sets the values to be displayed on new window for subscription info
document.getElementById("p1").innerHTML = localStorage.getItem("name");
document.getElementById("p2").innerHTML = localStorage.getItem("age");
document.getElementById("p3").innerHTML = localStorage.getItem("gender");
document.getElementById("p4").innerHTML = localStorage.getItem("origin");
document.getElementById("p5").innerHTML = localStorage.getItem("email");
document.getElementById("p6").innerHTML = localStorage.getItem("comments");
document.getElementById("p7").innerHTML = localStorage.getItem("interests");
