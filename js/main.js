
import { Modal } from './modal.js'
import { alertError } from './alert-error.js'
import { notANumber, IMC } from './utils.js'

// VARIABLE 
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
const errorAlert = document.querySelector('.alert-error')

form.onsubmit = function(event) {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    //PEGANDO OS VALORES DA FUNÇÃO DO TRATAMENTO DE ERRO DE DIGITAÇÃO
    const showAlertErro = notANumber(weight) || notANumber(height)

    if(showAlertErro) {
        alertError.open()
        return; // Retorna o erro e ignora o resto da função abaixo
    }

    alertError.close()

    const result = IMC(weight, height)

    Modal.Message.innerText= `Seu IMC é de ${result}`;
    Modal.open()
}

// Fechar a janela de erro ao Digitar no campo
inputWeight.oninput = () => alertError.close()
inputHeight.oninput = () => alertError.close()

