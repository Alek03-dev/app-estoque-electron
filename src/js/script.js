var botaoEntrar = document.getElementById("submit")

function login() {
    var campoEmail = document.getElementById("email").value

    var campoPassword = document.getElementById("password").value

    if( campoEmail == "a" && campoPassword == "a") {
        window.location.replace("dashboard.html")
    } else {

        console.log("Email ou senha incorretos")
    
    }

    console.log("Entrou na função login")
}

botaoEntrar .addEventListener("click", login)