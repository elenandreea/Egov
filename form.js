var standard = 60;
var VIP_adaos = 30;
var acces = 30;

const init = function() {
    document.getElementById('button-cancel').addEventListener('click', reset);
    document.getElementById('button-submit').addEventListener('click', submit);
    document.getElementById('input-cnp').addEventListener('keyup', validate_cnp);
    document.getElementById('input-seat').addEventListener('click', choose_seat);
    document.getElementById('input-VIP').addEventListener('click', change_price);
}

const reset = function(ev) {
    ev.preventDefault();
    document.getElementById('form-user').reset();
}

const submit = function(ev) {
    ev.preventDefault();
    ev.stopPropagation();

    let fails = validate();
    if (fails.length === 0) {
        writeData();
        exp();
        write_xml();
        document.getElementById('form-user').reset();
    } else {
        fails.forEach((obj) => {
            let field = document.getElementById(obj.input);
            field.parentElement.classList.add('error');
            field.parentElement.setAttribute('data-errormsg', obj.msg);
        })
    }
}

const validate = function(ev) {
    let failures = [];
    let chk = document.getElementById('input-acord');
    if (!chk.checked) {
        failures.push({ input: 'input-acord', msg: 'Trebuie bifat.' });
    }

    let first = document.getElementById('input-first');
    let last = document.getElementById('input-last');
    let cnp = document.getElementById('input-cnp');
    let email = document.getElementById('input-email');
    let iban = document.getElementById('input-iban');
    var varsta = getVarstaFromCnp(cnp.value);

    if (first.value === "") {
        failures.push({ input: 'input-first', msg: 'Camp obligatoriu' })
    }
    if (last.value === "") {
        failures.push({ input: 'input-last', msg: 'Camp obligatoriu' })
    }
    if (cnp.value === "" || cnp.value.length !== 13) {
        failures.push({ input: 'input-cnp', msg: 'CNP invalid' })
    }
    if (varsta < 18) {
        failures.push({ input: 'input-cnp', msg: 'Varsta minima este de 18 ani.' })
    }
    if (email.value === "") {
        failures.push({ input: 'input-email', msg: 'Camp obligatoriu' })
    }
    if (iban.value === "" || iban.value.length !== 24) {
        failures.push({ input: 'input-iban', msg: 'IBAN invalid' })
    }
    return failures;
}

const validate_cnp = function(ev) {

    choose_seat();
    var cnp = document.getElementById("input-cnp").value;

    if (cnp.length === 0) {
        document.getElementById("input-sex").value = "";
    }
    if (cnp.length < 7) {
        document.getElementById("input-nastere").value = "";
    }
    if (cnp.length > 0) {
        if (cnp[0] == "1" || cnp[0] == "5") {
            document.getElementById("input-sex").value = "Barbat";
        } else if (cnp[0] == "2" || cnp[0] == "6") {
            document.getElementById("input-sex").value = "Femeie";
        } else {
            cnp.parentElement.classList.add('error');
            cnp.parentElement.setAttribute('data-errormsg', 'CNP invalid.');
        }
    }

    var birth_date = cnp.substring(5, 7) + "/" + cnp.substring(3, 5) + "/" + cnp.substring(1, 3);
    if (birth_date.length === 8) {
        document.getElementById("input-nastere").value = birth_date;
    }
}

const choose_seat = function(ev) {
    let type = document.getElementById('input-seat');

    if (type.selectedIndex === 0) {
        document.getElementById("input-suma").value = standard;
        document.getElementById("VIP").hidden = true;
    }
    if (type.selectedIndex === 1) {
        document.getElementById("input-suma").value = standard + VIP_adaos;
        document.getElementById("VIP").hidden = false;
    }
}

const change_price = function(ev) {
    let add = document.getElementById('input-VIP');
    if (add.checked) {
        document.getElementById("input-suma").value = standard + VIP_adaos + acces;
    } else {
        document.getElementById("input-suma").value = standard + VIP_adaos;
    }
}

function getVarstaFromCnp(cnp) {
    s = cnp.substr(0, 1);
    an = cnp.substr(1, 2);
    lunaN = cnp.substr(3, 2);
    ziN = cnp.substr(5, 2);
    anN = (s == 1 || s == 2 ? 19 + an : 20 + an);
    dataCrt = new Date();
    lunaC = dataCrt.getMonth() + 1;
    varsta = dataCrt.getFullYear() - anN;
    if (lunaN > lunaC || (lunaN == lunaC && ziN > dataCrt.getDate())) {
        varsta--;
    }
    console.log("varsta: " + varsta);
    return varsta;
}

document.addEventListener('DOMContentLoaded', init);