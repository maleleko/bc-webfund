var count = 0;
var countClass = document.querySelector(".likes")
// console.log(countElement)

function  addlike() {
    count++;
    countClass.innerText = count + " like(s)"
    // console.log(count)
}