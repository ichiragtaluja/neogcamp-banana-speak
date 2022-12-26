var btnTranslate = document.querySelector("#btn-translate");

var textInput = document.querySelector("#text-input");

var outputDiv = document.querySelector("#output");

outputDiv.innerText = "ggg"

function clickHandler() {
    outputDiv.innerText = "hjhgjgj" + textInput.value;
};


btnTranslate.addEventListener("click", clickHandler)