function calcular() {
    var a = document.getElementById('ini');
    var b = document.getElementById('fim');
    var c = document.getElementById('pass');
    var res = document.getElementById('res')

        if (a.value.length == 0 || b.value.length == 0 || c.value.length == 0) {
            window.alert('[Erro] verifique os dados inseridos');
            res.innerHTML = 'impossível contar'
        } else {
            res.innerHTML = 'Calculando: <br>'
            let i = Number(a.value);
            let f = Number(b.value);
            let p = Number(c.value);
            if (p <= 0) {
                window.alert('Passo invalido! Consideraremos o passo como 1');
                p = 1
            }
            if (i < f) {
                // contagem crescente
                for(let c = i; c <= f; c += p){
                    res.innerHTML += `${c} \u{1F449}`
                }
                } else {
                // contagem regressiva
                for(let c = 1; c >= f; c -= p){
                    res.innerHTML += `${c} \u{1F449}`
                }
            }
            res.innerHTML += `\u{1F3C1}`

        }
}