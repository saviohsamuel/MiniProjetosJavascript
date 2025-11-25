const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
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

function isBroken () {
    return lamp.src.indexOf("quebrada") > -1;
}
turnOn.addEventListener("click", lampOn);
turnOff.addEventListener("click", lampOff);
lamp.addEventListener("dblclick", broken);
lamp.addEventListener("mouseenter", lampOn);
lamp.addEventListener("mouseout", lampOff);