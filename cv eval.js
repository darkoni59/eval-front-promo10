
var tabi=['imageA','imageB'];
var index=0;




$('.blue1').hover(function () {

    $(this).show();
    $(this).html('<h1>expériences</h1><li>Html5</li><li>css++</li><li>javascript</li><li>Jquery</li>');

    $(this).mouseout(function () {
        $(this).html('<span class="fas fa-book"></span><h2>experience</h2>')


    });
});

$('.blue2').hover(function () {

    $(this).show();
    $(this).html('<h1>contact</h1><p><strong>mail:bryanbultot@gmail.com</strong></p>'+'<p>n°: 03 27 59 96 71</p>');

$(this).mouseout(function () {
    $(this).html('<span class="far fa-address-book"></span><h2>contact</h2>')


});
});
$('.red').hover(function () {

    $(this).show();
    $(this).html('<h1>education</h1><li>bac pro hotellerie</li><li>licence Cam</li></span>');


    $(this).mouseout(function () {
        $(this).html('<span class="fas fa-user-graduate"></span><h2>education</h2>');


    });
});
$('.orange').hover(function () {
    $(this).show();
    $(this).html('<h1>social menu</h1> <a href="https://www.linkedin.com/in/bryan-bultot-896505171/"><i class="fab fa-linkedin"></a></span>');


    $(this).mouseout(function () {
        $(this).html('<span class="fas fa-grip-horizontal"></span><h2>social menu</h2>');


    });
});
$('.orange2').hover(function () {

    $(this).show();
    $(this).html('<h1>profil</h1><p>je me suis orienté vers la programmation par curiosité</p> <p>suite a cette decouverte j\'en suis tomber amoureux</p>');


    $(this).mouseout(function () {
        $(this).html('<span class="far fa-address-card"></span><h2>profil</h2>');


    });
});
$('.orange1').hover(function () {


    $(this).show();
    $(this).html('<h1>portfolio</h1><i class="fas fa-dice"></i> <a href="https://darkoni59610.000webhostapp.com/jeuxmemo-bryanbultot/memo.html"> jeux mémo</a><a  href="https://darkoni59610.000webhostapp.com/tri.html">jeu de tri</a>');


    $(this).mouseout(function () {
        $(this).html('<span class="fab fa-dropbox"></span><h2>portfolio</h2>');


    });
});
$('.green').hover(function () {
    $(this).show();
    $(this).html('<h1>blog</h1><a href="https://github.com/darkoni59"><i class="fab fa-github"></a>');


    $(this).mouseout(function () {
        $(this).html('<span class="fas fa-layer-group"></span><h2>blog</h2>');


    });

});
$('#carousel').