/**
 * Floating back to top button.
 *
 * @author    Matthias Morin <matthias.morin@gmail.com>
 * @modified  11:20 07/12/2016
 * @version   0.1.1
 * @requires  jQuery & Bootstrap
 */
$(function() {
    /* Give body "page-top" id, and inject scroll-top button. */
    $('body').attr('id', 'page-top').prepend('<a href="#page-top" id="scroll-top"><span class="glyphicon glyphicon-chevron-up"></span></a>');

    /* Apply CSS to injected element. */
    $('#scroll-top').css({
        'position': 'fixed',
        'z-index': '999',
        'display': 'none',
        'bottom': '5vh',
        'right': '5vw',
        'line-height': '1.5em',
        'height': '1.5em',
        'width': '1.5em',
        'font-size': '2em',
        'text-align': 'center',
        'text-indent': '1px',
        'border': 'none',
        'border-radius': '50%',
        'background': '#5cb85c',
        'color': 'white'
    });

    /* Detect user srolls */
    $(window).scroll(function() {
        if ( $(window).scrollTop() > 300 ) {
            $('#scroll-top').fadeIn('slow');
        } else {
            $('#scroll-top').fadeOut('slow');
        }
    });
});
