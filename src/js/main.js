//AJAX - Asyncrhronous JavaScript and XML

//Link para busca: https://viacep.com.br/ws/CEP-INSERIDO/json

//Nesta estapa estamos informando ao AJAX que deve realizar
//um método GET no link adicionado ao ENDPOINT
//Para executar a chamada, usamos a função SEND

// document.addEventListener('DOMContentLoaded', function(){
//     document.getElementById('btn-buscar-cep').addEventListener('click', function() {
//         const xhttp = new XMLHttpRequest();

//         const cep = document.getElementById('cep').value;
//         console.log(cep)
//         const endpoint = `https://viacep.com.br/ws/${cep}/json`;
//         console.log(endpoint)

//         xhttp.open('GET', endpoint);
//         xhttp.send();

//     })
// })

$(document).ready(function() {
    $('#cep').mask('00000-000')

    $('#btn-buscar-cep').click(function(){
        const cep =$('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        const botao = $(this)
        $(botao).find('i').addClass('d-none');
        $(botao).find('span').removeClass('d-none');

        $.ajax(endpoint).done(function(resposta){
            const logradouro = resposta.logradouro;
            const bairro = resposta.bairro;
            const cidade = resposta.localidade;
            const estado = resposta.uf;

            const endereco = `${logradouro}, ${bairro}, ${cidade}, ${estado}`;

            setTimeout(function(){
                $('#endereco').val(endereco);
                $(botao).find('i').removeClass('d-none');
                $(botao).find('span').addClass('d-none');
            }, 1000);
        });
    });
});