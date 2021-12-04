var start = true;
var error = false;
var op1 = "";
var op2 = "";
var controlo = 1;
var op = "";
var res = document.getElementById("res");

function clearResult() {
    start = true;
    op1 = "";
    op2 = "";
    controlo = 1;
    op = "";
    res.innerText = "";
    error = false;
}

function addNumber() {
    if(error) {
        clearResult();
    }

    var x = event.target.value;
    
    if (controlo == 1) {
        op1 += x;
    } else {
        op2 += x;
    }

    res.innerText += x;

    logs();
}

function addOperation() {
    var x = event.target.value;
    op += x;
    res.innerText = "";
    controlo = 2;
    logs();
}

function calculate() {
    if(op == "+") {
        op1 = op1 + op2;
        res.innerText = op1;
    } else if (op == "-") {
        op1 = op1 - op2;
        res.innerText = op1;
    } else if (op == "*") {
        op1 = op1 * op2;
        res.innerText = op1;
    } else if (op == "/" && parseInt(op2) != 0) {
        op1 = op1 / op2
        res.innerText = op1;
    } else if (op == "/" && parseInt(op2) == 0) {
        res.innerText = "Error: Divide by 0";
        error = true;
    }
    controlo = 1;
    op = "";
    op2 = "";

    logs();
}

function logs() {
    console.log(op1);
    console.log(op2);
    console.log(op);
    console.log(controlo);
}