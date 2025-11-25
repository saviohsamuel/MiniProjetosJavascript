const turnOnOff = document.getElementById("turnOnOff");
const lamp = document.getElementById("lamp");

function lampOn () {
    if (!isBroken()) {
        lamp.src = "./img/ligada.jpg";
    }
}

function lampOff () {
    if (!isBroken()) {
        lamp.src = "./img/desligada.jpg";
    }
}

function broken () {
    lamp.src = "./img/quebrada.jpg";
}

function lampOnOff () {
    if (turnOnOff.textContent == "Ligar") {
        lampOn();
        turnOnOff.textContent = "Desligar";
    } else {
        lampOff();
        turnOnOff.textContent = "Ligar"
    }
}

function isBroken () {
    return lamp.src.indexOf("quebrada") > -1;
}

turnOnOff.addEventListener("click", lampOnOff);
lamp.addEventListener("dblclick", broken);
lamp.addEventListener("mouseenter", lampOn);
lamp.addEventListener("mouseout", lampOff);