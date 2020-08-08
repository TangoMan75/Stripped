/**
 * Responsive Parallax Animation
 * Add "data-speed" attribute to ".parallax" element to set speed
 * where data-speed="1" is the fastest
 *
 * @author    Matthias Morin <matthias.morin@gmail.com>
 * @modified  17:00 27/01/2018
 * @version   0.1.3
 * @requires  jQuery
 */
 $(function(){
    $('.parallax').each(function(){
        var $element = $(this);
        $(window).scroll(function() {
            // Gets speed parameter from html element
            var intSpeed = $element.data('speed');
            // Sets default speed
            if (!intSpeed) {intSpeed = 6}
            var intElementTop  = $element.offset().top;
            var intViewportTop = $(window).scrollTop();
            // Negative value because we're scrolling upwards
            var intY = -( (intViewportTop - intElementTop) / intSpeed );
            // Background position
            var strCoords = 'center '+ intY + 'px';
            // Moves background
            $element.css({
                backgroundPosition: strCoords
            });
        });
    });
});
