// Leitura de cookies
let getCookie = document.cookie.split(";");
var pontos = getCookie[0] == '' ? 0 : parseInt(getCookie[0]);
const qtd = document.getElementById("qtd");
qtd.innerHTML = "Maças: " + parseInt(pontos);
var hasMsg = false;
// Declaração de upgrades
var appleState = 0;
var isUpgrade1On = false;
var precoUpgrade1 = 50;
var multiplicador1 = 1;
var isUpgrade2On = false;
var precoUpgrade2 = 100;
var multiplicador2 = 1;

function pontuar(num) {
    switch(num) {
        case 1:
            if(isUpgrade1On) {
                pontos += 1*multiplicador1;
            } else {
                pontos++;
            }
        break;
        case 2:
            pontos += 1 * multiplicador2;
        break;
    }
    evoluirMaca();
    const qtd = document.getElementById("qtd");
    qtd.innerHTML = "Maças: " + parseInt(pontos);
}

function evoluirMaca() {
    const apple = document.getElementById("apple");
    switch(appleState) {
        case 0:
            if(pontos >= 50) {
                apple.style.backgroundImage = "url('./images/bigode.png')";
                appleState++;
            }
        break;
        case 1:
            if(pontos >= 100) {
                apple.style.backgroundImage = "url('./images/chapeu.png')"
                appleState++;
            }
        break;
        case 2:
            if(pontos >= 200) {
                apple.style.backgroundImage = "url('./images/oclinho.png')";
                appleState++;
            }
        break;
        case 3:
            if(pontos >= 300) {
                apple.style.backgroundImage = "url('./images/ternito.png')";
                appleState++;
            }
        break;
    }
}

function upgrade(num) {
    switch(num) {
        case 1:
            if(pontos >= precoUpgrade1) {
                if(!isUpgrade1On) {
                    document.getElementById("up2").innerHTML = "Fazendeiros<br>100 <span class='vermelho'>maçãs</span>";
                }
                isUpgrade1On = true;
                pontos-=precoUpgrade1;
                precoUpgrade1 = precoUpgrade1*1.75;
                document.getElementById("up1").innerHTML = 'Galhos<br>' + parseInt(precoUpgrade1) + ' <span class="vermelho">maçãs</span>'
                multiplicador1+= 0.5;
                const qtd = document.getElementById("qtd");
                qtd.innerHTML = "Maças: " + parseInt(pontos);
            } else {
                mostrarmsg(1);
            }
        break;
        case 2:
            if(!document.getElementById("up2").innerHTML == '???????') {
                if(pontos >= precoUpgrade2) {
                    if(!isUpgrade2On) {
                        document.getElementById("up3").innerHTML = 'Mais maçãs por galho<br>150 <span class="vermelho">maçãs</span>';
                    }
                    isUpgrade2On = true;
                    pontos-=precoUpgrade2;
                    precoUpgrade2 = precoUpgrade2*1.75;
                    document.getElementById("up2").innerHTML = "Fazendeiros<br>" + parseInt(precoUpgrade2) + " <span class='vermelho'>maçãs</span>";
                    multiplicador2+=0.5;
                    const qtd = document.getElementById("qtd");
                    qtd.innerHTML = "Maças: " + parseInt(pontos);
                } else {
                    mostrarmsg(1);
                }
            } else {
                mostrarmsg(2);
            }
        break;
    }
}

setInterval(() => {
    if(hasMsg) {
        document.getElementById("msg").style.display = "none";
    }
}, 10000);

setInterval(() => {
    if(isUpgrade2On) {
        pontuar(2);
    }
}, 5000);

function salvar() {
    let cookieString = pontos;
    document.cookie = cookieString;
}

function mostrarmsg(num) {
    document.getElementById("msg").style.display = "inline-block";
    document.getElementById("msg").style.color = '#EB0E0E';
    hasMsg = true;
    switch(num) {
        case 1:
            document.getElementById("msg").innerHTML = "Você não tem maçãs suficiente!";
        break;
        case 2:
            document.getElementById("msg").innerHTML = "Este upgrade está bloqueado!";
        break;
    }
}

function mostrarMensagem(num) {
    document.getElementById("msg").style.display = "inline-block";
    document.getElementById("msg").style.color = 'black';
    switch(num) {
        case 1:
            document.getElementById("msg").innerHTML = "O seu progresso foi salvo!";
            hasMsg = true;
        break;
    }
}

setInterval(() => {
    mostrarMensagem(1);
    let cookieString = pontos;
    document.cookie = cookieString;
}, 60000)