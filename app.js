var btnTranslate = document.querySelector("#btn-translate");
var inputArea = document.querySelector('textarea')


btnTranslate.addEventListener("click", Eventhandler)

function Eventhandler() {
    console.log("clicked!!")
    console.log(inputArea.value)
}
