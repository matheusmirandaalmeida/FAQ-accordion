function toggleVisibility(tresPontosId, mostrarMaisId, btnLeiaMaisId) {
    const tresPontos = document.getElementById(tresPontosId);
    const mostrarMais = document.getElementById(mostrarMaisId);
    const btnLeiaMais = document.getElementById(btnLeiaMaisId);

    // Verifica se o conteúdo está visível
    const isVisible = tresPontos.style.display === 'none';

    // Alterna a visibilidade do conteúdo
    tresPontos.style.display = isVisible ? 'inline' : 'none';
    mostrarMais.style.display = isVisible ? 'none' : 'inline';

    // Alterna o texto e a classe do botão
    // btnLeiaMais.innerHTML = isVisible ? 'Leia Mais' : 'Leia Menos';
    btnLeiaMais.classList.toggle('button-collapsed');
    btnLeiaMais.classList.toggle('button-expanded');
}

// Configuração inicial para ocultar o conteúdo
document.getElementById('tresPontos2').style.display = 'inline';
document.getElementById('mostrarMais').style.display = 'inline';
// var btnLeiaMaisH2 = document.getElementById('btnLeiaMaisH2');

// uma exceção para o primeiro botão img 
var btnLeiaMaisH2 = document.getElementById('btnLeiaMaisH2');
btnLeiaMaisH2.style.backgroundImage = 'url("assets/images/icon-minus.svg")';
btnLeiaMaisH2.classList.add('button-expanded'); // Adicione a classe correta

document.getElementById('btnLeiaMaisH2').addEventListener('click', function () {
    toggleVisibility('tresPontos2', 'mostrarMais', 'btnLeiaMaisH2');
    // Aqui você pode adicionar lógica adicional para alternar entre as imagens ao clicar
    btnLeiaMaisH2.style.backgroundImage = btnLeiaMaisH2.classList.contains('button-expanded') 
        ? 'url("assets/images/icon-plus.svg")' : 'url("assets/images/icon-minus.svg")';
});

// Certifique-se de que a classe correta seja adicionada inicialmente
// document.getElementById('btnLeiaMaisH2').classList.add('button-collapsed');

document.getElementById('tresPontos3').style.display = 'inline';
document.getElementById('mostrarMais3').style.display = 'none';

document.getElementById('tresPontos4').style.display = 'inline';
document.getElementById('mostrarMais4').style.display = 'none';

document.getElementById('tresPontos5').style.display = 'inline';
document.getElementById('mostrarMais5').style.display = 'none';

// document.getElementById('btnLeiaMaisH2').addEventListener('click', function () {
//     toggleVisibility('tresPontos2', 'mostrarMais', 'btnLeiaMaisH2');
// });

document.getElementById('btnLeiaMaisH3').addEventListener('click', function () {
    toggleVisibility('tresPontos3', 'mostrarMais3', 'btnLeiaMaisH3');
});

document.getElementById('btnLeiaMaisH4').addEventListener('click', function () {
    toggleVisibility('tresPontos4', 'mostrarMais4', 'btnLeiaMaisH4');
});

document.getElementById('btnLeiaMaisH5').addEventListener('click', function () {
    toggleVisibility('tresPontos5', 'mostrarMais5', 'btnLeiaMaisH5');
});
