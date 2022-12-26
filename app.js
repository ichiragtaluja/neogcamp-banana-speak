var btnTranslate = document.querySelector("#btn-translate");

var textInput = document.querySelector("#text-input");

var outputDiv = document.querySelector("#output");

//varServerURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
varServerURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(text) {
    return (varServerURL + "?text==" + text)
}

function errorHandler(error) {
    console.log("Error Identified", error)

}


function clickHandler() {

    var inputText = textInput.value

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)


}


btnTranslate.addEventListener("click", clickHandler)