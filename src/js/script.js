var botaoEntrar = document.getElementById("submit")

function login() {
    var campoEmail = document.getElementById("email").value

    var campoPassword = document.getElementById("password").value

    if( campoEmail == "alek@alek.com" && campoPassword == "admin123") {
        window.location.replace("dashboard.html")
    } else {

        console.log("Email ou senha incorretos")
    
    }

    console.log("Entrou na função login")
}

botaoEntrar .addEventListener("click", login)