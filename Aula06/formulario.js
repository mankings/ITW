/* Função de validação  */
function validate() {
    var retVal = true;
    
    //Nome
    var _nome = document.getElementById("Nome");
    var _nomeError = document.getElementById("NomeError");
    if (_nome.value.trim().length < 3) {
        retVal = false;
        _nomeError.classList.add("d-block");
        _nomeError.classList.remove("d_none");
    }
    else {
        _nomeError.classList.remove("d-block");
        _nomeError.classList.add("d_none");
    }

    //Morada
    var _morada = document.getElementById("Morada");
    var _moradaError = document.getElementById("MoradaError");
    var palavrasArray = _morada.value.split(" ");
    if (palavrasArray.length < 3) {
        retVal = false;
        _moradaError.classList.add("d-block");
        _moradaError.classList.remove("d_none");
    }
    else {
        _moradaError.classList.remove("d-block");
        _moradaError.classList.add("d_none");
    }

    //Curso
    var _curso = document.getElementById("Curso").selectedIndex;
    var _cursoError = document.getElementById("CursoError");
    if(_curso == "") {
        retVal = false;
        _cursoError.classList.add("d-block");
        _cursoError.classList.remove("d_none");
    }
    else {
        _cursoError.classList.remove("d-block");
        _cursoError.classList.add("d_none");
    }

    //Transporte
    var inputElemsArray = document.getElementsByTagName("input");
    var count = 0;
    var _vehicleError = document.getElementById("VehicleError");
    for (var i = 0; i < inputElemsArray.length; i++) {
        if (inputElemsArray[i].type == "checkbox" && inputElemsArray[i].checked == true) {
            count++;
        }
    }
    if (count < 2) {
        retVal = false;
        _vehicleError.classList.add("d-block");
        _vehicleError.classList.remove("d_none");
    }
    else {
        _vehicleError.classList.remove("d-block");
        _vehicleError.classList.add("d_none");
    }

    //Cor
    var _cores = document.querySelectorAll("input[name='cor']:checked").length;
    var _coresError = document.getElementById("CorError");
    if (_cores == 0) {
        retVal = false;
        _coresError.classList.add("d-block");
        _coresError.classList.remove("d_none");
    }
    else {
        _coresError.classList.remove("d-block");
        _coresError.classList.add("d_none");
    }

    return retVal;
}