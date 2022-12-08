let nav = document.querySelector('nav');

window.addEventListener('scroll', function(){
    if (window.pageYOffset > 600){
        nav.classList.add('bg-dark', 'shadow');
    }
    else{
        nav.classList.remove('bg-dark', 'shadow');
    }
})


let ciruclarProgress = document.querySelector(".circular-progress"), progressValue = document.querySelector(".progress-value");
let progressStartValue = 0, progressEndValue = 100, speed = 15;

let progress = setInterval(() => {
    progressStartValue++

    progressValue.textContent = progressStartValue + "%";
    ciruclarProgress.style.background = "conic-gradient(rgba(1,56,105,1)" + progressStartValue * 3.6 + "deg, white 0deg)"; 
    if (progressStartValue == progressEndValue){
        clearInterval(progress);
    }
}, speed);




