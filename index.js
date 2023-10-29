const btnOneEl = document.getElementById("one");
const btnTwoEl = document.getElementById("two");
const btnEqualsEl = document.getElementById("equals");
const btnPlusEl = document.getElementById("plus");


let a,b,calc;

btnOneEl.addEventListener("click",(e) => {
    e.preventDefault();
    e.value = 1;
    console.log(e.value);
})
btnTwoEl.addEventListener("click",(e) => {
    e.preventDefault();
    e.value = 2;
    console.log(e.value)
})
btnEqualsEl.addEventListener("click",(e) => {
    e.preventDefault();
    e.value = '=';
    console.log(e.value)
})
btnPlusEl.addEventListener("click",(e) => {
    e.preventDefault();
    e.value = '+';
    console.log(e.value)
})

function calulate(){

}