import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { calculateIMC, notANumber } from "./utils.js"

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

form.onsubmit = function() {
    event.preventDefault()
    const height = inputHeight.value
    const weight = inputWeight.value
    
    const showAlertError = notANumber(weight) || notANumber(height)


    if(showAlertError){
        AlertError.open()
        return;
    }else{
       
        const result = calculateIMC(weight, height)
        
        displayResultMessage(result)
    }
}

function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`
    console.log(result)
    
    Modal.message.innerText = message
    Modal.open()
}