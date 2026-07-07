/*=========================================================
REGIONAL SALES TEAM PORTAL

DATABASE ENGINE

Version 1.0
=========================================================*/

class Database{

    constructor(){

        this.reset();

    }

    /*=========================================
    RESET
    =========================================*/

    reset(){

        this.calendario=[];

        this.target=[];

        this.sellOut=[];

        this.inventario=[];

        this.referencias=[];

        this.pdv=[];

        this.asesores=[];

        this.supervisores=[];

        this.cityManagers=[];

        this.parametros={};

        this.alertas=[];

    }

    /*=========================================
    CARGAR TABLA
    =========================================*/

    load(table,data){

        this[table]=data;

    }

    /*=========================================
    OBTENER TABLA
    =========================================*/

    get(table){

        return this[table];

    }

    /*=========================================
    CONTAR REGISTROS
    =========================================*/

    count(table){

        return this[table].length;

    }

    /*=========================================
    BUSCAR
    =========================================*/

    find(table,field,value){

        return this[table].filter(item=>item[field]==value);

    }

    /*=========================================
    DISTINCT
    =========================================*/

    distinct(table,field){

        return [...new Set(

            this[table].map(item=>item[field])

        )];

    }

    /*=========================================
    FILTRAR
    =========================================*/

    filter(table,filters){

        return this[table].filter(row=>{

            return Object.keys(filters).every(key=>{

                return row[key]==filters[key];

            });

        });

    }

}

const DB=new Database();