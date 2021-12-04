var produtos = 0;
var p = [0, 0, 0, 0, 0, 0];
var totalPrice = 0.0;
var prices = [24.99, 21.99, 19.99, 26.99, 36.99, 39.99];

var _quantidades = document.getElementById("quantidades");
var _total = document.getElementById("total");

var _qty = [document.getElementById("qty1"), document.getElementById("qty2"), document.getElementById("qty3"), document.getElementById("qty4"), document.getElementById("qty5"), document.getElementById("qty6")]

function addProduct(product) {
    produtos++;
    p[product - 1]++;
    _qty[product - 1].value++;
    calculate();

    _quantidades.innerText = produtos;
}

function calculate() {
    for(var i = 0; i < p.length; i++) {
        totalPrice += p[i]*prices[i];
        console.log(p[i]);
        console.log(prices[i]*p[i]);
    }

    if(produtos >= 5) {
        totalPrice /= 0.95;
    }

    if(totalPrice >= 100) {
        totalPrice /= 0.95;
    }

    _total.innerText = totalPrice.toFixed(2);
}

function valid() {
    if(produtos == 0) {
        alert("Adicione pelo menos um item ao carrinho.");
        return false;
    } else {
        return true;
    }
}

function clean() {
    produtos = 0;
    p = [0, 0, 0, 0, 0, 0];
    totalPrice = 0.0;
    for(var i = 0; i < _qty.length; i++) {
        _qty[i].value = 0;
    }

    _quantidades.innerText = 0;
    _total.innerText = 0.00;
}