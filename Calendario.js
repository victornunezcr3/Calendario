let mes = document.createElement("DIV");
mes.className = "mes";
document.body.appendChild(mes);

let tabla_mes = document.createElement("TABLE");

function estructurar() {
    for (m = 0; m <= 11; m++) {
        //Título
        titulo.innerText = mes_text[m];
     }
 }