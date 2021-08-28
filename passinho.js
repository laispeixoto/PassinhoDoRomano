//.charCodeAt() - transformar letra em número
//.fromCharCode() - transformar número em letra

var msg
var incremento

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