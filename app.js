let colors = document.querySelectorAll("button") 
colors.forEach(element => {
    element.addEventListener("click", (e)=> {
        document.body.style.backgroundColor = e.target.classList.value

        e.target.style.border = "1px solid white"
    })
});