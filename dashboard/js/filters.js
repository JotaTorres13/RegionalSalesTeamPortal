/*=========================================================
REGIONAL SALES TEAM PORTAL

FILTER ENGINE

Version 1.0
=========================================================*/

function updateFilters(){

    loadChannels();

}


/*=========================================================
CARGAR CANALES
=========================================================*/

function loadChannels(){

    const select = document.getElementById("filterChannel");

    if(!select){

        console.warn("No existe filterChannel.");

        return;

    }

    // Limpiar opciones
    select.innerHTML = "";

    // Opción por defecto
    const defaultOption = document.createElement("option");

    defaultOption.value = "";

    defaultOption.textContent = "Todos los canales";

    select.appendChild(defaultOption);

    // Obtener canales únicos desde la hoja PDV
    const channels = DB.distinct("pdv","Canal");

    channels.sort();

    channels.forEach(channel=>{

        const option = document.createElement("option");

        option.value = channel;

        option.textContent = channel;

        select.appendChild(option);

    });

    console.log("Canales cargados:",channels);

}