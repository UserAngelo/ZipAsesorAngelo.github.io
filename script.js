const betnRandom = document.querySelector("#random-btn")
function moverAleatoriariamente(btn){
    btn.style.fontWeight = "bolder";
    btn.style.position = "absolute";
    btn.style.top =Math.floor(Math.random() * 90 + 5) + "%";  
    btn.style.left =Math.floor(Math.random() * 90 + 5) + "%";  

}

betnRandom.addEventListener("mouseenter", function(e){
    moverAleatoriariamente(e.target)
})