const progress = document.querySelector(".progress") 

window.onload = () => {
    setTimeout(() => {
        progress.style.transform = "scaleX(1)"
        progress.style.transition = ".8s ease"
    }, 300)
}
