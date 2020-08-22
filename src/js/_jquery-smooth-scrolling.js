/**
 * jQuery Smooth Scrolling
 *
 * @author    Matthias Morin <mat@tangoman.io>
 * @modified  10:30 30/05/2017
 * @version   0.2.0
 * @requires  jQuery
 */
$(function() {
    $("a[href^='#']").on('click', function(e) {
        e.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 700, function() {
            window.location.hash = hash;
        });
    });
});
