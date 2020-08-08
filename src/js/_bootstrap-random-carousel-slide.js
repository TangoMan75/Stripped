/**
 * Randomise Bootstrap carousel slides
 * 
 * @author    Matthias Morin <matthias.morin@gmail.com>
 * @modified  11:22 07/12/2016
 * @version   0.1.1
 * @requires  jQuery
 */
var $slideCount = $('.item').length;
var $currentSlide = Math.floor((Math.random() * $slideCount));

$('.carousel-indicators li').each(function(){
    var $slideValue = $(this).attr('data-slide-to');
    if($currentSlide == $slideValue) {
        $(this).addClass('active');
        $item.eq($slideValue).addClass('active');
    } else {
        $(this).removeClass('active');
        $item.eq($slideValue).removeClass('active');
    }
});
