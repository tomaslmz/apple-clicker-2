var pontos = 0;
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
