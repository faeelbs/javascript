
function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
        if (fano.ariaValueMax.lenght == 0 || fano.value > ano) {
            window.alert('[Erro} verifique os dados e tente novamente!');
            } else {
                var fsex = document.getElementsByName('radsex');
                var idade = ano - Number(fano.value);
                res.innerHTML = `Idade calculada: ${idade}`;
            }
}