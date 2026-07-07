const routes = {

    dashboard: "dashboard/dashboard.html",

    claro: "pages/claro.html",

    carriers: "pages/carriers.html",

    openmarket: "pages/openmarket.html",

    jornadas: "pages/jornadas.html",

    resumen: "pages/resumen.html"

};

async function loadPage(route){

    if(!routes[route]){

        console.error("Ruta no encontrada");

        return;

    }

    try{

        const response = await fetch(routes[route]);

        const html = await response.text();

        document.getElementById("appContent").innerHTML = html;

    }

    catch(error){

        console.error(error);

    }

}