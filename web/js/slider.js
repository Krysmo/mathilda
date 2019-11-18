document.addEventListener('DOMContentLoaded', function () {

    let largeur;

    if ($(window).width() <= 767) {
        largeur = 100;
    } else {
        largeur = 33.33;
    }

    // Ciblages
    let fgauche = document.querySelector('#fgauche');
    let fdroite = document.querySelector('#fdroite');
    let slide = document.querySelector('#slide');

    // Initialisation
    let index = 0;
    let pos = 0;

    // GESTION D'EVENEMENTS
    // Flèche Gauche
    fdroite.addEventListener('click', function () {
        if (index < 3) {
            index++;
            pos = index * -largeur;
            slide.style.left = pos + "vw";
        }
        testFleche(index);
    });

    // Flèche Droite
    fgauche.addEventListener('click', function () {
        if (index > 0) {
            index--;
            pos = index * -largeur;
            slide.style.left = pos + "vw";
        }
        testFleche(index);
    });

    // FONCTIONS
    // testFleche()
    function testFleche(index) {
        if (index == 3) {
            fdroite.style.display = "none";
        } else {
            fdroite.style.display = "flex";
        }
        if (index == 0) {
            fgauche.style.display = "none";
        } else {
            fgauche.style.display = "flex";
        }
    }

});