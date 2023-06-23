let getCookie = document.cookie.split(";");
// var pontos = typeof getCookie[0] != "undefined" && typeof parseInt(getCookie[0]) != "number" ? 0 : parseInt(getCookie[0]);
var pontos = getCookie[0] == '' ? 0 : parseInt(getCookie[0]);
const qtd = document.getElementById("qtd");
qtd.innerHTML = "Maças: " + pontos;
var isUpgrade1On = false;
var multiplicador1 = 0;

function pontuar(num) {
    
    const qtd = document.getElementById("qtd");
    qtd.innerHTML = "Maças: " + pontos;
    switch(num) {
        case 1:
            pontos++;
        break;
        case 2:
            pontos = pontos * multiplicador1;
        break;
    }
}

function upgrade(num) {
    switch(num) {
        case 1:
            isUpgrade1On = true;
            multiplicador1++;
        break;

    }
}

setInterval(() => {
    if(isUpgrade1On) {
        pontuar(2);
    }
}, 5000);

function salvar() {
    let cookieString = pontos-1;
    document.cookie = cookieString;
}