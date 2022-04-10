console.log('start');

window.addEventListener('DOMContentLoaded', function () {
    alert('hej');
    var plus = document.querySelector('#plus');
    var minus = document.querySelector('#minus');
    plus.addEventListener('click', function () {
        zmienRozmiar(30);
    })
    minus.addEventListener('click', function () {
        zmienRozmiar(15);
    })
});


function zmienRozmiar(rozmiar) {
    var el = document.querySelector('html');
    el.style.fontSize = rozmiar + 'px';
    //el.style.backgroundColor = '#f00';
}

console.log('koniec');