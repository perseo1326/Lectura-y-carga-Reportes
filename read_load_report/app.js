
'use strict';


// *********************************************************
// CONSTANTS
const VERSION = "1.0";

// Excel shipments file manipulation values
const SHIPMENTS_FILE_EXTENSION_ARRAY = [ "xlsm" ];
const SHIPMENTS_FILE_MYME_TYPE_ARRAY = ["application/vnd.ms-excel.sheet.macroEnabled.12"];
const SHIPMENTS_FILE_WORKBOOK_SHEET = "Data";


const loadReportB = document.getElementById("load_report-button");
const divData = document.getElementById("data");

// *********************************************************
// Variables

let SG010Report = [];
// *********************************************************
// Event Listeners

loadReportB.addEventListener("change", loadReport);

// *********************************************************


initializePage();

// *********************************************************
// Function to initialize the original values
function initializePage() {
    console.log("Inicializando valores originales...");

}





function loadReport(evento) {

    const file = evento.target.files[0];
    // loadingFrame.classList.remove("no-visible");

    const fileStatus = new ExcelFileOpen(file, SHIPMENTS_FILE_EXTENSION_ARRAY, SHIPMENTS_FILE_WORKBOOK_SHEET, SHIPMENTS_FILE_MYME_TYPE_ARRAY );

    console.log("FILE: ", fileStatus);
    // loadFileLabel.innerText = fileStatus.file.name;

    const promiseData = loadExcelFile(fileStatus);

    promiseData.then( (response) => {
        
        // let contentData = validateShipmentsFile( response );
        console.log("Carga \"" + fileStatus.file.name + "\" Finalizada!"); 

        SG010Report = response;

        renderData(SG010Report);

        // contentData = getShipmentsInfoFromGrossData( contentData );

        // contentData = sortTrucksInfo(contentData);

        // document.getElementById("button-load-shipments").classList.add("no-visible");
        // document.getElementById("shipments-container").classList.remove("no-visible");
        // document.getElementById("shipments-commands").classList.remove("no-visible");
        // document.getElementById("box").classList.remove("box");

        // shipmentsData = arrayToMap( contentData );

        // showShipmentsData(shipmentsData);
    })
    .catch( (error) => {
        console.log("ERROR:openFile: ", error);
        alert(error.message);
        initializePage();
    })
    .finally( () => {
        // loadingFrame.classList.add("no-visible");
    });
}


// *********************************************************
function renderData(data) {
    console.log("DATA: ", data);

    divData.innerHTML = "";
    divData.innerText = "";

    console.log(data[1000]);
    divData.innerText = data[1000];
}
// *********************************************************
