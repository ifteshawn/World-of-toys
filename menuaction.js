// fetches the navigation menu list
const list1Element = document.getElementById("list1");
//fetches the styles of navigation menu list
const list1Styles = window.getComputedStyle(list1Element);

//enables to open or close menu from clicking on hamburger menu icon on mobile display
function menuAction() {
    if (list1Styles.display == "none")
        list1Element.style.display = "flex";
    else
        list1Element.style.display = "none";
}

//observes size of window to change back and forth from mobile display
window.addEventListener("resize", function (event) {
    let x = window.matchMedia("(min-width: 501px)");
    let y = window.matchMedia("(max-width: 500px)");
    if (x.matches){
        document.getElementById("list1").style.display = "flex";
    }
    if (y.matches){
        document.getElementById("list1").style.display = "none";
    }
}, true);

