let NAVBAR = document.querySelector("nav");

window.addEventListener("scroll", function(){
    let test = this.document.documentElement.scrollTop;

    if(test > 100){
        NAVBAR.classList.add("navFixed_about")
    }else{
        NAVBAR.classList.remove("navFixed_about")
    }
    
})

let chake = document.querySelector(".row_1st");

chake.addEventListener("click", function(){
    alert('ok');
});