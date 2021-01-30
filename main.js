window.onload = () => {
    validNumCard();
    validNumCVC();
    validNumAmo();
    validacionFirts();
    validacionLast();
    validacionCity();
    validNumPostal();
    validacionRadio();
    limpiarCasillas();
}

//-----------------------------------------------------------------------------------//

limpiarCasillas = () =>{
    let form = document.getElementById("from");
    document.querySelector("#cancel-button").addEventListener('click', () => {
        document.getElementById("validationCard").value = "";
        document.getElementById("validationCVC").value = "";
        document.getElementById("validationAmo").value = "";
        document.getElementById("validationFirts").value = "";
        document.getElementById("validationPostal").value = "";
        document.getElementById("validationLast").value = "";
        document.getElementById("validationCity").value = "";

    });
}

// ----------------------------------------------------------------------------------//

// Card number validation
validNumCard = () => {
    let button = document.querySelector("#submit-button");
    button.addEventListener("click", function () {
        let camp = document.getElementById("validationCard").value;
        if (validacionNum(camp) === false) {
            document.getElementById("validationCard").classList.add("is-invalid");
            document.getElementById("validationCard").value = "";
            console.log("Oh no!");
        }
        else if (validacionNum(camp) === true) {
            document.getElementById("validationCard").classList.remove("is-invalid");
            document.getElementById("validationCard").classList.add("is-valid");
            console.log("Correct!");
        }
    });
}

// CVC number validation
validNumCVC = () => {
    let button = document.querySelector("#submit-button");
    button.addEventListener("click", function () {
        let camp = document.getElementById("validationCVC").value;
        if (validacionNum(camp) === false) {
            document.getElementById("validationCVC").classList.add("is-invalid");
            document.getElementById("validationCVC").value = "";
            console.log("Oh no!");
        }
        else if (validacionNum(camp) === true) {
            document.getElementById("validationCVC").classList.remove("is-invalid");
            document.getElementById("validationCVC").classList.add("is-valid");
            console.log("Correct!");
        }
    });
}

// Amount number validation
validNumAmo = () => {
    let button = document.querySelector("#submit-button");
    button.addEventListener("click", function () {
        let camp = document.getElementById("validationAmo").value;
        if (validacionNum(camp) === false) {
            document.getElementById("validationAmo").classList.add("is-invalid");
            document.getElementById("validationAmo").value = "";
            console.log("Oh no!");
        }
        else if (validacionNum(camp) === true) {
            document.getElementById("validationAmo").classList.remove("is-invalid");
            document.getElementById("validationAmo").classList.add("is-valid");
            console.log("Correct!");
        }
    });
}

// Postal number validation
validNumPostal = () => {
    let button = document.querySelector("#submit-button");
    button.addEventListener("click", function () {
        let camp = document.getElementById("validationPostal").value;
        if (validacionNum(camp) === false) {
            document.getElementById("validationPostal").classList.add("is-invalid");
            document.getElementById("validationPostal").value = "";
            console.log("Oh no!");
        }
        else if (validacionNum(camp) === true) {
            document.getElementById("validationPostal").classList.remove("is-invalid");
            document.getElementById("validationPostal").classList.add("is-valid");
            console.log("Correct!");
        }
    });
}


//----------------------------------------------------------------------------------------//

//Firts Name validation 
validacionFirts = () => {
    let button = document.querySelector("#submit-button");
    button.addEventListener("click", function () {
        let camp = document.getElementById("validationFirts").value;
        if (validacionLe(camp) === false) {
            document.getElementById("validationFirts").classList.add("is-invalid");
            document.getElementById("validationFirts").value = "";
            console.log("Oh no!");
        }
        else if (validacionLe(camp) === true) {
            document.getElementById("validationFirts").classList.remove("is-invalid");
            document.getElementById("validationFirts").classList.add("is-valid");
            console.log("Correct!");
        }
    });
}

//Last Name Validation
validacionLast = () => {
    let button = document.querySelector("#submit-button");
    button.addEventListener("click", function () {
        let camp = document.getElementById("validationLast").value;
        if (validacionLe(camp) === false) {
            document.getElementById("validationLast").classList.add("is-invalid");
            document.getElementById("validationLast").value = "";
            console.log("Oh no!");
        }
        else if (validacionLe(camp) === true) {
            document.getElementById("validationLast").classList.remove("is-invalid");
            document.getElementById("validationLast").classList.add("is-valid");
            console.log("Correct!");
        }
    });
}

//Validation City
validacionCity = () => {
    let button = document.querySelector("#submit-button");
    button.addEventListener("click", function () {
        let camp = document.getElementById("validationLast").value;
        if (validacionLe(camp) === false) {
            document.getElementById("validationCity").classList.add("is-invalid");
            document.getElementById("validationCity").value = "";
            console.log("Oh no!");
        }
        else if (validacionLe(camp) === true) {
            document.getElementById("validationCity").classList.remove("is-invalid");
            document.getElementById("validationCity").classList.add("is-valid");
            console.log("Correct!");
        }
    });
}
//---------------------------------------------------------------------------------------//
//Validation City
validacionRadio = () => {
    let button = document.querySelector("#submit-button");
    button.addEventListener("click", function () {
       let opciones = document.getElementsByName("radioButton");
        if (validarRadio(opciones) === false) {
            document.getElementById("validationRadio").classList.add("is-invalid");
            console.log("Oh no!");
        }
        else if (validacionLe(opciones) === true) {
            document.getElementById("validationRadio").classList.remove("is-invalid");
            console.log("Correct!");
        }
    });
}


//--------------------------------------------------------------------------------------//

validacionNum = (camp) => {
    if (isNaN(camp) || camp === "") {
        return false;
    }
    else {
        return true;
    }
}

validacionLe = (camp) => {
    if (camp === "") {
        return false;
    }
    else {
        return true;
    }
}

validarRadio = (opciones) => {
    

    var seleccionado = false;
    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            seleccionado = true;
            break;
        }
    }

    if (!seleccionado) {
        return false;
    }
}


