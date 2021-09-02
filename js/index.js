function redirectToPage(event) {
    if(event.keyCode == 13){
        var word = document.querySelector("#query");
        window.location.href = "https://www.google.com/search?q="+ word.value;
    }
}