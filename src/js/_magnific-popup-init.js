/**
 * Magnific Popup Initialisation
 * 
 * @url       http://dimsemenov.com/plugins/magnific-popup
 * @author    Matthias Morin <mat@tangoman.io>
 * @version   0.1.0
 * @modified  20:26 23/09/2017
 * @requires  jQuery
 */
$(document).ready(function () {
    $('.gallery').magnificPopup({
        delegate: 'a.image-popup',
        type: 'image',
        tLoading: 'Chargement de l\'image #%curr%...',
        mainClass: 'mfp-with-zoom',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">L\'image #%curr%</a> n\'a pas pu être chargée.',
            titleSrc: function (item) {
                return item.el.attr('title');
            }
        },
        zoom: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out'
        }
    });
});