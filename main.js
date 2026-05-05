import  {digaOla}  from './digaOla.js'
 import {imc} from './imc.js'
 import {verificaImc} from './verificaImc.js'

    digaOla()

const indice = imc(70, 1.75)
const mensagem = verificaImc(indice)

console.log(`Seu imc é ${indice.toFixed(2)} a classificação é ${mensagem}` )
