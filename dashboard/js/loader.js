/*=========================================================
REGIONAL SALES TEAM PORTAL

LOADER ENGINE

Version 2.0
=========================================================*/

function loadWorkbook(workbook){

    DB.reset();

    loadSheet(workbook,"Calendario","calendario");
    loadSheet(workbook,"Target","target");
    loadSheet(workbook,"Sell Out","sellOut");
    loadSheet(workbook,"Inventario","inventario");
    loadSheet(workbook,"Referencias","referencias");
    loadSheet(workbook,"PDV","pdv");
    loadSheet(workbook,"Asesores","asesores");
    loadSheet(workbook,"Supervisores","supervisores");
    loadSheet(workbook,"City Manager","cityManagers");
    loadSheet(workbook,"Parametros","parametros");
    loadSheet(workbook,"Alertas","alertas");

    showLoadSummary();

}


/*=========================================================
CARGAR UNA HOJA
=========================================================*/

function loadSheet(workbook,sheetName,dbTable){

    const sheet = workbook.Sheets[sheetName];

    if(!sheet){

        console.warn(`No existe la hoja ${sheetName}`);

        return;

    }

    const data = XLSX.utils.sheet_to_json(sheet,{

        defval:""

    });

    DB.load(dbTable,data);

}


/*=========================================================
RESUMEN DE CARGA
=========================================================*/

function showLoadSummary(){

    const summary =

`========================================

EXCEL CARGADO CORRECTAMENTE

Calendario: ${DB.count("calendario")}
Target: ${DB.count("target")}
Sell Out: ${DB.count("sellOut")}
Inventario: ${DB.count("inventario")}
Referencias: ${DB.count("referencias")}
PDV: ${DB.count("pdv")}
Asesores: ${DB.count("asesores")}
Supervisores: ${DB.count("supervisores")}
City Manager: ${DB.count("cityManagers")}
Parametros: ${DB.count("parametros")}
Alertas: ${DB.count("alertas")}

========================================`;

    console.log(summary);

    alert(

        "✅ Excel cargado correctamente.\n\n" +

        "Calendario: " + DB.count("calendario") + "\n" +

        "Target: " + DB.count("target") + "\n" +

        "Sell Out: " + DB.count("sellOut") + "\n" +

        "Inventario: " + DB.count("inventario") + "\n" +

        "Referencias: " + DB.count("referencias") + "\n" +

        "PDV: " + DB.count("pdv") + "\n" +

        "Asesores: " + DB.count("asesores") + "\n" +

        "Supervisores: " + DB.count("supervisores") + "\n" +

        "City Manager: " + DB.count("cityManagers") + "\n" +

        "Parametros: " + DB.count("parametros") + "\n" +

        "Alertas: " + DB.count("alertas")

    );

    dashboardLoaded();

}