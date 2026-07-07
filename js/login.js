const modal = document.getElementById("loginModal");

const loginButton = document.getElementById("loginButton");

const error = document.getElementById("loginError");

function abrirLogin(){

    modal.classList.add("active");

    document.getElementById("username").focus();

}

function cerrarLogin(){

    modal.classList.remove("active");

}

loginButton.addEventListener("click", validarLogin);

function validarLogin(){

    const usuario = document.getElementById("username").value.trim();

    const password = document.getElementById("password").value.trim();

    if(usuario==="1044002312" && password==="1044002312"){

        cerrarLogin();

        sessionStorage.setItem("usuario",usuario);

        alert("Bienvenido José Torres");

        return;

    }

    error.innerHTML="Usuario o contraseña incorrectos.";

}

window.onclick=function(e){

    if(e.target===modal){

        cerrarLogin();

    }

}