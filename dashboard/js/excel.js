/*=========================================================
REGIONAL SALES TEAM PORTAL

EXCEL ENGINE

Version 2.1
=========================================================*/

function initExcelEngine(){

    const btnExcel = document.getElementById("btnExcel");
    const excelFile = document.getElementById("excelFile");

    if(!btnExcel || !excelFile){

        console.error("No se encontró el botón o el input del Excel.");

        return;

    }

    btnExcel.addEventListener("click",()=>{

        excelFile.click();

    });

    excelFile.addEventListener("change", readExcelFile);

}


/*=========================================================
LEER ARCHIVO EXCEL
=========================================================*/

function readExcelFile(event){

    const file = event.target.files[0];

    if(!file){

        console.warn("No se seleccionó ningún archivo.");

        return;

    }

    console.log("========================================");
    console.log("Archivo seleccionado:");
    console.log(file.name);
    console.log("========================================");

    const reader = new FileReader();

    reader.onload = function(e){

        try{

            const data = new Uint8Array(e.target.result);

            const workbook = XLSX.read(data,{
                type:"array"
            });

            validateWorkbook(workbook);

        }

        catch(error){

            console.error(error);

            alert("❌ Error al leer el archivo Excel.");

        }

    };

    reader.readAsArrayBuffer(file);

}


/*=========================================================
VALIDAR WORKBOOK
=========================================================*/

function validateWorkbook(workbook){

    const requiredSheets=[

        "Calendario",
        "Target",
        "Sell Out",
        "Inventario",
        "Referencias",
        "PDV",
        "Asesores",
        "Supervisores",
        "City Manager",
        "Parametros",
        "Alertas"

    ];

    const missingSheets=requiredSheets.filter(sheet=>

        !workbook.SheetNames.includes(sheet)

    );

    if(missingSheets.length>0){

        alert(

            "❌ El archivo no es válido.\n\n" +

            "Faltan las siguientes hojas:\n\n" +

            missingSheets.join("\n")

        );

        return;

    }

    console.log("Workbook validado correctamente.");

    loadWorkbook(workbook);

}