//.charCodeAt() - transformar letra em número
//.fromCharCode() - transformar número em letra
//de 97 a 122 são letras minúsculas
//de 65 a 90 são letras maiúsculas

var msg
var incremento
var retornoMensagem
var metodo
var cripDecrit


function cifrado(){
    let mensagemArr = mensagem.split('')
    let mensagemCifrada = []
    let codificadorArr = []
    
    for (let i = 0; mensagemArr.length > i; i++){
        if (mensagemArr[i].charCodeAt() >= 65 && mensagemArr[i].charCodeAt() <=90 ){
            let teste = ((mensagemArr[i].charCodeAt()) -65 + incremento)%26
            codificadorArr.push(teste+65)
            console.log("cheguei")
        }else if(mensagemArr[i].charCodeAt() >= 97 && mensagemArr[i].charCodeAt() <=122){
            let teste = ((mensagemArr[i].charCodeAt()) -97 + incremento)%26
            codificadorArr.push(teste+97)
            console.log("cheguei")
        }else{
            codificadorArr.push(mensagemArr[i].charCodeAt())
            console.log("cheguei")
        }
    }
    for (let j = 0; codificadorArr.length > j; j++){
        mensagemCifrada.push(String.fromCharCode(codificadorArr[j]))
    }
    return mensagemCifrada.join('')



//comando de codifação para Cifra de Cesar
function codificaCC (msg, incremento) {
    msg = msg.split('')
    msg = msg.charCodeAt()
    var recebeMsgC = []
    var msgFinal

    for (var i = 0; i <= msg.length; i++) {
        var msg2 = msg[i].charCodeAt()
        if (msg2 !== 32) {
            recebeMsgC.push(msg2 + incremento)
        }
        else {
            recebeMsgC.push(msg2)
        }
    }
    for (var j = 0; j < recebeMsgC.length; j++) {
        msgFinal.push(String.fromCharCode(recebeMsgC[j]))
    }
    return msgFinal.join("")
}

//comando de decodifação para Cifra de Cesar
function decodificaCC (msg, incremento) {
    msg = msg.split('')
    var recebeMsgC = []
    var msgFinal = []

    for (var i = 0; i < msg.length; i++) {
        var msg2 = msg[i].charCodeAt()

        if (msg2 !== 32) {
            recebeMsgC.push(msg2 - incremento)
        }

        else {
            recebeMsgC.push(msg2)
        }
    }

    for (var j = 0; j < recebeMsgC.length; j++) {
        msgFinal.push(String.fromCharCode(recebeMsgC[j]))
    }
    return msgFinal.join("")
}

//usando para a base64

function  codificaB () {
    var  msgCod = btoa (mensagem)
    
    return  msgCod

}

function  decodificaB () {
    var  msgCod = atob (mensagem)
    
    return  msgCod

}