function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
        if (fano.value.length == 0 || fano.value > ano) {
            window.alert('[Erro] verifique os dados e tente novamente!');
        } else {
            var fsex = document.getElementsByName('radsex');
            var idade = ano - Number(fano.value);
            var genero = ''
            var img = document.createElement('img');
            img.setAttribute('id','foto');
                if (fsex[0].checked) {
                    genero = 'Homem'
                    if (idade >=0 && idade< 10){
                        //criança
                        Img.setAttribute('src', 'nenemhomem.jpg')
                    } else if (idade < 21){
                        //jovem
                        Img.setAttribute('src', 'jovemhomem.jpg')
                    } else if (idade < 50){
                        //adulto
                        Img.setAttribute('src', 'adultohomem.jpg')
                    } else{
                        //idoso
                        Img.setAttribute('src', 'idosohomem.jpg')
                    }
                } else if (fsex[1].checked){
                    genero = 'Mulher'
                    if (idade >=0 && idade< 10){
                        //criança
                    } else if (idade < 21){
                        //jovem
                    } else if (idade < 50){
                        //adulto
                    } else{
                        //idoso
                    }
                }
                res.getElementsByClassName.textAlign = 'center'
                res.innerHTML = `Detectamos ${genero} com ${idade} anos`
                res.appendChild(img)
        }
}