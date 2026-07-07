/*=========================================================
DASHBOARD ENGINE

Version 2.0
=========================================================*/

function initDashboard(){

    initExcelEngine();

}


/*=========================================================
DASHBOARD ACTUALIZADO
=========================================================*/

function dashboardLoaded(){

    console.log("Dashboard listo.");

    updateFilters();

    updateKPIs();

    updateCharts();

    updateTable();

    updateAlerts();

}