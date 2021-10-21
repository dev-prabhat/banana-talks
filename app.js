var btnTranslate = document.querySelector("#btn-translate");
var inputArea = document.querySelector('textarea')
var outputArea = document.querySelector('#output')


// var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverUrl = "https://api.funtranslations.com/translate/minion.json"


function getText(text) {
    return `${serverUrl}?text=${text}`
}

function Eventhandler() {

    var inputText = inputArea.value;


    fetch(getText(inputText))
        .then(res => res.json())
        .then(json => {
            var translatedText = json.contents.translated
            outputArea.innerText = translatedText
            // console.log(json.contents.translated)
        })
        .catch(err => console.log(err))
}

btnTranslate.addEventListener("click", Eventhandler)