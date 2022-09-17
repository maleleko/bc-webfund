function turnOff(element) {
    if (element.innerText === "Logout") {
        element.innerText = "Login"
    }
    else { 
        element.innerText = "Logout"
    }
}

// How to properly code an else statement?

function hide(element) {
    element.remove();
}