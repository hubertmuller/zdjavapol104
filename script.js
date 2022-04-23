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

    document.forma.addEventListener('submit', function (target) {


        document.querySelectorAll("form div");

        var imie = document.forma.imie;
        if (!imie.value.match(/^([A-z]{3,})$/g)) {
            wyswietlBlad(imie, 'imie musi byc dluższe niz 2 znaki');
            target.preventDefault();
        }
        var nazwisko = document.forma.nazwisko;
        if (nazwisko.value === '') {
            wyswietlBlad(nazwisko, 'nazwisko nie moze byc puste');
            target.preventDefault();
        }
    })

});

function wyswietlBlad(element, komunikat) {
    const forma = document.forma;
    const nowyElement = document.createElement("div");
    const zawartosc = document.createTextNode(komunikat);
    nowyElement.appendChild(zawartosc);
    forma.insertBefore( nowyElement , element);
}

function zmienRozmiar(rozmiar) {
    var el = document.querySelector('html');
    el.style.fontSize = rozmiar + 'px';
    //el.style.backgroundColor = '#f00';
}

console.log('koniec');