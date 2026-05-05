export function verificaImc(imc){
    if(imc < 18.5){
        return "Magreza severa"
    }else if(imc >= 18.5 && imc < 25){
        return "Normal"
    }else if(imc >= 25 && imc < 30){
        return "Sobrepeso"
    }else{
        return "Obesidade"

    }
}
