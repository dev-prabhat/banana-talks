const btnTranslate = document.querySelector("#btn-translate");
const inputArea = document.querySelector('textarea')
const outputArea = document.querySelector('#output')


// var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

const serverUrl = "https://api.funtranslations.com/translate/minion.json"


// function getText(text) {
//     return `${serverUrl}?text=${text}`
// }

const getText = text => `${serverUrl}?text=${text}`

const Eventhandler = () => {

    const inputText = inputArea.value;


    fetch(getText(inputText))
        .then(res => res.json())
        .then(json => {
            const translatedText = json.contents.translated
            outputArea.innerText = translatedText
            console.log(json.contents.translated)
        })
        .catch(err => console.log(err))
}

btnTranslate.addEventListener("click", Eventhandler)