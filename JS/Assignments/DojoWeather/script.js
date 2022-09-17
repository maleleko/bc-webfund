

// cookies

var div = document.getElementById("footer")
function hide() {
    div.remove();
}


// farhenheit or celsius 

function c2f(temp) {
    return Math.round(9 / 5 * temp + 32);
}

function f2c(temp) {
    return Math.round(5 / 9 * (temp - 32));
}

function swap(element) {
    console.log(element)
    for(var i=1; i<9; i++) {
        var tempSpan = document.querySelector(".temp" + i);
        var tempVal = parseInt(tempSpan.innerText);
        if(element.value == "°C") {
            tempSpan.innerText = f2c(tempVal);
        } else {
            tempSpan.innerText = c2f(tempVal);
        }
    }
}
    // if(warm = 24,27,21,26) {
    //     warm.value = 25,28,22,27;
    // } else { 24,27,21,26;

    // }

/*
    Changing temp scale

    Get all the 'warm'
    Iterrate through the temps how? - for loops
    for each, adjust to the temp scale
        - math formula?
        - check value of element for scale
*/