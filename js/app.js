/*====================================================
 Regional Sales Team Portal
 app.js - Versión 1.1A
====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    iniciarReloj();
    contadorVisitas();
    cargarNoticias();
    iniciarBuscador();
    iniciarTarjetas();

});


/*====================================================
FECHA Y HORA
====================================================*/

function iniciarReloj(){

    actualizarFechaHora();

    setInterval(actualizarFechaHora,1000);

}

function actualizarFechaHora(){

    const ahora=new Date();

    const fecha=ahora.toLocaleDateString("es-CO",{

        weekday:"long",
        year:"numeric",
        month:"long",
        day:"numeric"

    });

    const hora=ahora.toLocaleTimeString("es-CO");

    document.getElementById("date").textContent=fecha;

    document.getElementById("clock").textContent=hora;

}


/*====================================================
CONTADOR VISITAS
====================================================*/

function contadorVisitas(){

    let visitas=localStorage.getItem("portal_visits");

    if(!visitas){

        visitas=1;

    }else{

        visitas=parseInt(visitas)+1;

    }

    localStorage.setItem("portal_visits",visitas);

    document.getElementById("visits").textContent=visitas;

}


/*====================================================
NOTICIAS
====================================================*/

async function cargarNoticias(){

    try{

        const respuesta=await fetch("data/news.json");

        const noticias=await respuesta.json();

        const contenedor=document.getElementById("newsContainer");

        contenedor.innerHTML="";

        noticias.forEach(noticia=>{

            const div=document.createElement("div");

            div.className="news-item";

            div.innerHTML=`
                <h3>${noticia.titulo}</h3>
                <p>${noticia.descripcion}</p>
            `;

            contenedor.appendChild(div);

        });

    }

    catch(error){

        console.error(error);

    }

}


/*====================================================
BUSCADOR
====================================================*/

function iniciarBuscador(){

    const input=document.querySelector(".search-box input");

    const tarjetas=document.querySelectorAll(".menu-card");

    input.addEventListener("keyup",()=>{

        const texto=input.value.toLowerCase();

        tarjetas.forEach(card=>{

            const nombre=card.innerText.toLowerCase();

            if(nombre.includes(texto)){

                card.style.display="block";

            }

            else{

                card.style.display="none";

            }

        });

    });

}


/*====================================================
TARJETAS
====================================================*/

function iniciarTarjetas(){

    const cards=document.querySelectorAll(".menu-card");

    cards.forEach(card=>{

        card.addEventListener("click",()=>{

            const titulo=card.innerText.trim();

            switch(titulo){

                case "Regional Sales Team":

                    mostrarLogin();

                    break;

                case "Jornadas Administrativas":

                    alert("Próximamente");

                    break;

                case "Claro":

                    alert("Próximamente");

                    break;

                case "Carriers":

                    alert("Próximamente");

                    break;

                case "Open Market":

                    alert("Próximamente");

                    break;

                case "Sistema de Gestión Comercial":

                    alert("Dashboard Comercial en construcción");

                    break;

            }

        });

    });

}


/*====================================================
LOGIN
====================================================*/

function mostrarLogin(){

    const usuario=prompt("Usuario");

    const password=prompt("Contraseña");

    if(

        usuario==="1044002312" &&

        password==="1044002312"

    ){

        alert("Bienvenido José Torres");

    }

    else{

        alert("Usuario o contraseña incorrectos");

    }

}


/*====================================================
UTILIDADES
====================================================*/

function formatoCOP(valor){

    return valor.toLocaleString(

        "es-CO",

        {

            style:"currency",

            currency:"COP"

        }

    );

}