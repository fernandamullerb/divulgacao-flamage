var price = document.getElementById("price")
var featurePrice = 0;
var lancamento = document.getElementById("1");
document.getElementById('price').textContent = `R$ ${featurePrice},00`

lancamento.addEventListener('change', function() {
    if(this.checked) {
        featurePrice += 5;
        document.getElementById('price').textContent = `R$ ${featurePrice},00`
    } else {
        featurePrice -= 5;
        document.getElementById('price').textContent = `R$ ${featurePrice},00`
    }
});

var consulta = document.getElementById("2");
consulta.addEventListener('change', function() {
    if(this.checked) {
        featurePrice += 5;
        document.getElementById('price').textContent = `R$ ${featurePrice},00`
    } else {
        featurePrice -= 5;
        document.getElementById('price').textContent = `R$ ${featurePrice},00`
    }
});

var dashboard = document.getElementById("3");
dashboard.addEventListener('change', function() {
    if(this.checked) {
        featurePrice += 5;
        document.getElementById('price').textContent = `R$ ${featurePrice},00`
    } else {
        featurePrice -= 5;
        document.getElementById('price').textContent = `R$ ${featurePrice},00`
    }
});

var pagamento = document.getElementById("4");
pagamento.addEventListener('change', function() {
    if(this.checked) {
        featurePrice += 5;
        document.getElementById('price').textContent = `R$ ${featurePrice},00`
    } else {
        featurePrice -= 5;
        document.getElementById('price').textContent = `R$ ${featurePrice},00`
    }
});

var simulacao = document.getElementById("5");
simulacao.addEventListener('change', function() {
    if(this.checked) {
        featurePrice += 5;
        document.getElementById('price').textContent = `R$ ${featurePrice},00`
    } else {
        featurePrice -= 5;
        document.getElementById('price').textContent = `R$ ${featurePrice},00`
    }
});

var reserva = document.getElementById("6");
reserva.addEventListener('change', function() {
    if(this.checked) {
        featurePrice += 5;
        document.getElementById('price').textContent = `R$ ${featurePrice},00`
    } else {
        featurePrice -= 5;
        document.getElementById('price').textContent = `R$ ${featurePrice},00`
    }
});

var permissoes = document.getElementById("7");
permissoes.addEventListener('change', function() {
    if(this.checked) {
        featurePrice += 5;
        document.getElementById('price').textContent = `R$ ${featurePrice},00`
    } else {
        featurePrice -= 5;
        document.getElementById('price').textContent = `R$ ${featurePrice},00`
    }
});

var auditoria = document.getElementById("8");
auditoria.addEventListener('change', function() {
    if(this.checked) {
        featurePrice += 5;
        document.getElementById('price').textContent = `R$ ${featurePrice},00`
    } else {
        featurePrice -= 5;
        document.getElementById('price').textContent = `R$ ${featurePrice},00`
    }
});

var marca = document.getElementById("9");
marca.addEventListener('change', function() {
    if(this.checked) {
        featurePrice += 5;
        document.getElementById('price').textContent = `R$ ${featurePrice},00`
    } else {
        featurePrice -= 5;
        document.getElementById('price').textContent = `R$ ${featurePrice},00`
    }
});

