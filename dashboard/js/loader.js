document.addEventListener("DOMContentLoaded", () => {

    const dashboardButton = document.getElementById("dashboardButton");

    if (!dashboardButton) return;

    dashboardButton.addEventListener("click", cargarDashboard);

});

async function cargarDashboard() {

    try {

        const response = await fetch("dashboard/dashboard.html");

        const html = await response.text();

        document.getElementById("appContent").innerHTML = html;

    }

    catch(error){

        console.error(error);

        alert("No fue posible cargar el Dashboard.");

    }

}