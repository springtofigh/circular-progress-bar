const progressCircular = document.querySelector(".progress-circular");
const btn = document.querySelector("button");
const input = document.querySelector("input");
const value = document.querySelector(".value");
let start = 0;

btn.addEventListener('click', bar)

function bar() {
    let progress = setInterval(() => {
        if (start < input.value) {
            start++;
            progressEnd();
        } else {
            start--;
            progressEnd();
        }
        function progressEnd() {
        value.textContent = `${start}%`;
        progressCircular.style.background = `conic-gradient(#880bea ${start * 3.6}deg , #ededed 0deg)`;
        if (start == input.value){
            clearInterval(progress);
            input.value="";
        }
        }
    },50);
}