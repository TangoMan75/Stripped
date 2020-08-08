$(window).on('load resize scroll', function(){
    showElements();
});

// Chrome
$('body>section').on('scroll', function(event) {
    showElements();
});

/**
 * Shows element on scroll
 *
 * @author    "Matthias Morin" <matthias.morin@gmail.com>
 * @modified  10:00 01/08/2017
 * @version   0.1.0
 * @requires  jQuery
 */
function showElements(){
    var $elements = $('.animated');
    for (i = 0; i < $elements.length; i++) {
        if (isScrolledIntoView($elements[i])) {
            $($elements[i]).addClass('active');
        }
    }
}

/**
 * Defines if an element is into view on the page.
 *
 * @author    "Matthias Morin" <matthias.morin@gmail.com>
 * @version   0.1.3
 * @requires  jQuery
 * @param     {Object}   objElement  Target dom element
 * @return    {Boolean}              When element is visible on the page
 */
function isScrolledIntoView(objElement) {
	var $element = $(objElement);
	var $window  = $(window);

	var viewportTop    = $window.scrollTop();
	var viewportHeight = $window.height();
	var viewportBottom = viewportTop + viewportHeight;
	var viewportCenter = viewportTop + (viewportHeight /2);
	var viewportThird  = viewportBottom - (viewportHeight /3);

	var elementTop    = $element.offset().top;
	var elementHeight = $element.height();
	var elementBottom = elementTop + elementHeight;
	var elementCenter = elementTop + (elementHeight /2);

	// Returns true when element is found between viewport's top and bottom and user scrolls past its two
	// third. Or if element is taller than viewport, returns true when element's top is found past two thirds 
	// of the page.
	return (
		(elementBottom <= viewportBottom) && (elementTop >= viewportTop) && (elementCenter < viewportThird) ||
		(elementHeight > viewportHeight) && (elementTop >= viewportTop) && (elementTop < viewportThird)
		);
}
