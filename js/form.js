
function loginSystem(){

    if(usuInv){
        
        window.location.href = "/systema.html"
    }
}

function usuInv(){
    if(pegaValor()[0] == mostraNome()[0] && mostraNome()[1] == pegaValor()[1] ){
        document.getElementById("usuInv").style.display = "none"
        console.log(mostraNome()[0])
        console.log(mostraNome()[1])
        
        return true
    }else{
        document.getElementById("usuInv").style.display = "block"
        return false
    }
}




function pegaValor(){
    let email1 = document.getElementById("email2").value
    let pass2 =  document.getElementById("senha2").value
    let dataR = [email1,pass2]

    return dataR

}

function mostraNome(){
    let email = localStorage.getItem("email")
    let senha = localStorage.getItem("nome")
    let arrayDados = [email,senha];
    return arrayDados;
}

document.addEventListener("DOMContentLoaded", mostraNome)
