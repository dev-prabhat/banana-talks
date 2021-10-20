var btnTranslate = document.querySelector("#btn-translate");
var inputArea = document.querySelector('textarea')
var outputArea = document.querySelector('#output')


btnTranslate.addEventListener("click", Eventhandler)

function Eventhandler() {
    outputArea.innerText = inputArea.value
}
