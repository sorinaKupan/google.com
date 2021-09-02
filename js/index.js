function redirectToPage(event) {
    if(event.keyCode == 13){
        var word = document.querySelector("query");
        window.location.href = "https://www.google.com/search?q="+ word.textContent;
    }
}
function visibleMenu(){
    if (document.getElementById("userMenu").style.visibility = "hidden"){
       document.getElementById("userMenu").style.visibility = "visible"
    }
    else if(document.getElementById("userMenu").style.visibility = "visible"){
        document.getElementById("userMenu").style.visibility = "hidden"
    }
}