// Leitura de cookies
let getCookie = document.cookie.split(";");
var pontos = localStorage.getItem('pontos') == null ? 0 : parseInt(localStorage.getItem('pontos'));
const qtd = document.getElementById("qtd");
qtd.innerHTML = "Maças: " + parseInt(pontos);
var hasMsg = false;
// Declaração de upgrades
var appleState = getCookie[1] == '' || typeof getCookie[1] == 'undefined' ? 0 : parseInt(getCookie);
if(!getCookie[2] && !typeof getCookie[2] == 'undefined' == '') {
    if(getCookie[2] == 'true') {
        var hasEvolution = true;
    } else {
        var hasEvolution = false;
    }
} else {
    var hasEvolution = false;
}
// Upgrade 1
if(!getCookie[3] == '' && !typeof getCookie[3] == 'undefined') {
    if(getCookie[3] == 'true') {
        var isUpgrade1On = true;
    } else {
        var isUpgrade1On = false;
    }
} else {
    var isUpgrade1On = false;
}

// let cookieString = pontos + ";" + appleState + ";" + hasEvolution + ";" + isUpgrade1On + ";" + precoUpgrade1 + ";" + multiplicadorClique + ";" + isUpgrade2On + ";" + precoUpgrade2 + ";" + multiplicadorAfk + ";" + isUpgrade3On + ";" + precoUpgrade3 + ";" + isUpgrade4On + ";" + precoUpgrade4 + ";" + isUpgrade5On + ";" + precoUpgrade5;

var precoUpgrade1 = getCookie[4] == '' || typeof getCookie[4] == 'undefined' ? 50 : parseInt(getCookie[4]);
var multiplicadorClique = getCookie[5] == '' || typeof getCookie[5] == 'undefined' ? 1 : parseInt(getCookie[5]);
// Upgrade 2
if(!getCookie[6] == '' && !typeof getCookie[6] == 'undefined') {
    if(getCookie[6] == 'true') {
        var isUpgrade2On = true;
    } else {
        var isUpgrade2On = false;
    }
} else {
    var isUpgrade2On = false;
}
var precoUpgrade2 = getCookie[7] == '' || typeof getCookie[8] == 'undefined' ? 100 : parseInt(getCookie[7]);
var multiplicadorAfk = getCookie[8] == '' || typeof getCookie[8] == 'undefined' ? 1 : parseInt(getCookie[8]);
// Upgrade 3
if(!getCookie[9] == '' && !typeof getCookie[9] == 'undefined') {
    if(getCookie[9] == 'true') {
        var isUpgrade3On = true;
    } else {
        var isUpgrade3On = false;
    }
} else {
    var isUpgrade3On = false;
}
var precoUpgrade3 = getCookie[10] == ''  || typeof getCookie[10] == 'undefined'? 200 : parseInt(getCookie[10]);
// Upgrade 4
if(!getCookie[11] == '' && !typeof getCookie[11] == 'undefined') {
    if(getCookie[11] == 'true') {
        var isUpgrade4On = true;
    } else {
        var isUpgrade4On = false;
    }
} else {
    var isUpgrade4On = false;
}

var precoUpgrade4 = getCookie[12] == '' || typeof getCookie[12] == 'undefined' ? 300 : parseInt(getCookie[12]);
// Upgrade 5
if(!getCookie[13] == '' && !typeof getCookie[14] == 'undefined') {
    if(getCookie[13] == 'true') {
        var isUpgrade5On = true;
    } else {
        var isUpgrade5On = false;
    }
} else {
    var isUpgrade5On = false;
}

var precoUpgrade5 = getCookie[14] == '' || typeof getCookie[14] == 'undefined' ? 1000 : parseInt(getCookie[14]);


function pontuar(num) {
    switch(num) {
        case 1:
            if(isUpgrade1On) {
                pontos += 1*multiplicadorClique;
            } else {
                pontos++;
            }
        break;
        case 2:
            pontos += 1 * multiplicadorAfk;
        break;
    }
    evoluirMaca();
    qtd.innerHTML = "Maças: " + parseInt(pontos);
}

function evoluirMaca() {
    const apple = document.getElementById("apple");
    if(!hasEvolution) {
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
    } else {
        switch(appleState) {
            case 0:
                if(pontos >= 500) {
                    apple.style.backgroundImage = "url('./images/secret2.png')";
                    appleState++;
                }
            break;
            case 1:
                if(pontos >= 1000) {
                    apple.style.backgroundImage = "url('./images/secret3.png')"
                    appleState++;
                }
            break;
        }
    }
}

function upgrade(num) {
    const qtd = document.getElementById("qtd");
    switch(num) {
        case 1:
            if(pontos >= precoUpgrade1) {
                if(!isUpgrade1On) {
                    document.getElementById("up2").innerHTML = "Fazendeiros<br>100 <span class='vermelho'>maçãs</span>";
                }
                isUpgrade1On = true;
                pontos-=precoUpgrade1;
                precoUpgrade1 = precoUpgrade1*1.35;
                document.getElementById("up1").innerHTML = 'Galhos<br>' + parseInt(precoUpgrade1) + ' <span class="vermelho">maçãs</span>'
                multiplicadorClique+= 0.5
                qtd.innerHTML = "Maças: " + parseInt(pontos);
            } else {
                mostrarErro(1);
            }
        break;
        case 2:
            if(isUpgrade1On) {
                if(pontos >= precoUpgrade2) {
                    if(!isUpgrade2On) {
                        document.getElementById("up3").innerHTML = 'Fertilização<br>' + parseInt(precoUpgrade3) + ' <span class="vermelho">maçãs</span>';
                    }
                    isUpgrade2On = true;
                    pontos-=precoUpgrade2;
                    precoUpgrade2 = precoUpgrade2*1.35;
                    document.getElementById("up2").innerHTML = "Fazendeiros<br>" + parseInt(precoUpgrade2) + " <span class='vermelho'>maçãs</span>";
                    multiplicadorAfk+=0.5;
                    qtd.innerHTML = "Maças: " + parseInt(pontos);
                } else {
                    mostrarErro(1);
                }
            } else {
                mostrarErro(2);
            }
        break;
        case 3: 
            if(isUpgrade2On) {
                if(pontos >= precoUpgrade3) {
                    if(!isUpgrade3On) {
                        document.getElementById("up4").innerHTML = 'Mais fazendeiros<br>' + parseInt(precoUpgrade4) + ' <span class="vermelho">maçãs</span>';
                    }
                    isUpgrade3On = true;
                    pontos-=precoUpgrade3;
                    precoUpgrade3 = precoUpgrade3*1.35;
                    document.getElementById("up3").innerHTML = 'Fertilização<br>' + parseInt(precoUpgrade3) + ' <span class="vermelho">maçãs</span>';
                    multiplicadorClique+=1;
                    qtd.innerHTML = "Maçãs: " + parseInt(pontos);
                } else {
                    mostrarErro(1);
                }
            } else {
                mostrarErro(2);
            }
        break;
        case 4:
            if(isUpgrade3On) {
                if(!isUpgrade4On) {
                    document.getElementById("up5").innerHTML = "Evoluir<br>" + parseInt(precoUpgrade5) + ' <span class="vermelho">maçãs</span>';
                }
                isUpgrade4On = true;
                pontos-=precoUpgrade4;
                precoUpgrade4 = precoUpgrade4*1.35;
                document.getElementById("up4").innerHTML = 'Mais fazendeiros<br>' + parseInt(precoUpgrade4)+ ' <span class="vermelho">maçãs</span>';
                multiplicadorAfk+=1.75;
                qtd.innerHTML = "Maçãs: " + parseInt(pontos);
            } else {
                mostrarErro(2);
            }
        break;
        case 5:
            if(isUpgrade4On) {
                if(!isUpgrade5On) {
                    document.getElementById("apple").style.backgroundImage = "url('./images/secret1.png')";
                    appleState = 0;
                    hasEvolution = true;
                }
                multiplicadorClique+=1.75;
                multiplicadorAfk+=2;
                pontos-=precoUpgrade5;
                precoUpgrade5 = precoUpgrade5*1.35;
                document.getElementById("up5").innerHTML = 'Evoluir<br>' + parseInt(precoUpgrade5) + ' <span class="vermelho">maçãs</span>';
                qtd.innerHTML = "Maçãs: " + parseInt(pontos);
            } else {
                mostrarErro(2);
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
    mostrarMensagem(1);
    // let cookieString = `${pontos};${appleState};${hasEvolution};${isUpgrade1On};${precoUpgrade1};${multiplicadorClique};${isUpgrade2On};${precoUpgrade2};${multiplicadorAfk};${isUpgrade3On};${precoUpgrade3};${isUpgrade4On};${precoUpgrade4};${isUpgrade5On};${precoUpgrade5}`
    // var expirationDate = new Date();
    // expirationDate.setDate(expirationDate.getDate() + 30);

    // // Configurar o cookie com a string e a data de expiração
    // document.cookie = cookieString + "; expires=" + expirationDate.toUTCString();
    localStorage.setItem('pontos', pontos);
    localStorage.setItem('appleState', appleState);
    localStorage.setItem('hasEvolution', hasEvolution);
    localStorage.setItem('isUpgrade1On', isUpgrade1On);
    localStorage.setItem('precoUpgrade1', precoUpgrade1);
    localStorage.setItem('multiplicadorClique', multiplicadorClique);
    localStorage.setItem('isUpgrade2On', isUpgrade2On);
    localStorage.setItem('precoUpgrade2', precoUpgrade2);
    localStorage.setItem('multiplicadorAfk', multiplicadorAfk);
    localStorage.setItem('isUpgrade3On', isUpgrade3On);

    
}

function mostrarErro(num) {
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
    salvar();
}, 60000)