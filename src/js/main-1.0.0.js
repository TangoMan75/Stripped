/**
 * Injects ARIA roles into HTML
 *
 * @url       https://www.w3.org/TR/html-aria/
 * @author    Matthias Morin <mat@tangoman.io>
 * @version   0.1.2
 * @modified  15:41 26/12/2016
 * @note      Doesn't require jQuery
 */

/**
 * Initializes script
 */
window.onload = init();

/**
 * Adds ARIA role to dom element
 *
 * @param  {String}  strId    id of the target element
 * @param  {String}  strRole  Desired role
 */
function setARIARoleById(strId, strRole) {
    // Find the element to add a role property to
    var objElement = document.getElementById(strId);

    if (objElement) {
        // Add the role property to the element
        objElement.setAttribute('role', strRole);
    }
}

/**
 * Add role attribute to dom element
 *
 * @param  {Object}  objElement  Target element
 * @param  {String}  strRole     Role to be added to element
 */
function setARIARole(objElement, strRole) {
    if (objElement) {
        // Add the role property to the element
        objElement.setAttribute('role', strRole);
    }
}

/**
 * Defines ARIA role to be added in the dom
 */
function init() {

    // First `header` is considered to have role `banner`
    // Site-orientated content, such as the title of the page and the logo.
    var objBanner = document.querySelector('body > header:first-of-type');
    setARIARole(objBanner, 'banner');

    // Last `footer` is considered to have role `contentinfo`
    // Child content, such as footnotes, copyrights, links to privacy statement, links to preferences, and so on.
    var objFooter = document.querySelector('body > footer:last-of-type');
    setARIARole(objFooter, 'contentinfo');

    // All `nav` are considered to have role `navigation`
    // Content that contains the links to navigate this document and/or related documents.
    document.getElementsByTagName('nav').forEach(function(objElement){
        setARIARole(objElement, 'navigation');
    });

    // All `a` in `nav` are considered to have role `menuitem`
    // An option in a group of choices contained by a menu or menubar.
    document.querySelectorAll('nav a').forEach(function(objElement){
        setARIARole(objElement, 'menuitem');
    });

    // All checkbox, link, menuitem, menuitemcheckbox, menuitemradio, radio, switch, tab
    // or elements with `class="btn"` are considered to have role `button`
    // An input that allows for user-triggered actions when clicked or pressed.
    document.querySelectorAll('checkbox, link, menuitem, menuitemcheckbox, menuitemradio, radio, switch, tab, .btn').forEach(function(objElement){
        setARIARole(objElement, 'button');
    });

    // All `section > header > h1` and `article > header > h1` are considered to have role `heading`
    // A heading for a section of the page.
    document.querySelectorAll('section > header > h1, article > header > h1').forEach(function(objElement){
        setARIARole(objElement, 'heading');
    });

    // All `main` are considered to have role `main`
    // Content that is directly related to or expands on the central content of the document.
    document.getElementsByTagName('main').forEach(function(objElement){
        setARIARole(objElement, 'main');
    });

    // All `article` are considered to have role `article`
    // Content that makes sense in its own right, such as a complete blog post, a comment on a blog, a post in a forum, and so on.
    document.getElementsByTagName('article').forEach(function(objElement){
        setARIARole(objElement, 'article');
    });

    // All `Aside` are considered to have role `complementary`
    // Supporting content for the main content, but meaningful in its own right when separated from the main content. For example, the weather listed on a portal.
    document.getElementsByTagName('aside').forEach(function(objElement){
        setARIARole(objElement, 'complementary');
    });

    // All `hr` are considered to have role `separator`
    // A divider that separates and distinguishes sections of content or groups of menuitems.
    document.getElementsByTagName('hr').forEach(function(objElement){
        setARIARole(objElement, 'separator');
    });

    // All `Form` are considered to have role `form`
    // A landmark region that contains a collection of items and objects that, as a whole, combine to create a form.
    document.getElementsByTagName('form').forEach(function(objElement){
        setARIARole(objElement, 'form');
    });

    // All `input[type=search]` are considered to have role `search`
    // This section contains a search form to search the site.
    document.querySelectorAll('input[type=search]').forEach(function(objElement){
        setARIARole(objElement, 'search');
    });
}
/**
 * Floating back to top button.
 *
 * @author    Matthias Morin <mat@tangoman.io>
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

/**
 * Bootstrap modal initialisation
 *
 * Listens to all buttons with data-toggle="modal"
 * 
 * @url       http://getbootstrap.com/javascript/#modals
 * @author    Matthias Morin <mat@tangoman.io>
 * @version   0.1.4
 * @modified  18:40 25/10/2017
 * @requires  jQuery
 */
$(function() {
    // Gets all buttons with attribute data-toggle="modal"
    var objButtons = document.querySelectorAll('button[data-toggle="modal"]');
    if (objButtons) {
        for (i = 0; i < objButtons.length; i++) {
            // Listens to mousedown events on each button
            $(objButtons[i]).on('mousedown', function(){
                var $this     = $(this);
                // Get target
                var strTarget = $this.data('target');
                var $Target   = $(strTarget);
            });
        }
    }
});

/**
 * Bootstrap popovers initialisation
 *
 * @url       http://getbootstrap.com/javascript/#popovers
 * @author    Matthias Morin <mat@tangoman.io>
 * @version   0.1.0
 * @modified  17:00 10/10/2017
 * @requires  jQuery
 */
$(function() {
    $('[data-toggle="popover"]').popover()
});

/**
 * Randomise Bootstrap carousel slides
 * 
 * @author    Matthias Morin <mat@tangoman.io>
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

/**
 * Bootstrap tabs initialisation
 *
 * @url       http://getbootstrap.com/javascript/#tabs
 * @author    Matthias Morin <mat@tangoman.io>
 * @version   0.1.0
 * @modified  18:40 25/10/2017
 * @requires  jQuery
 */
 $(function() {
    $('#myTabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    })
});

/**
 * Bootstrap tooltips initialisation
 *
 * @url       http://getbootstrap.com/javascript/#tooltips
 * @author    Matthias Morin <mat@tangoman.io>
 * @version   0.1.0
 * @modified  15:57 08/11/2016
 * @requires  jQuery
 */
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
});

/**
 * Form inputs
 * 
 * @author         Matthias Morin <mat@tangoman.io>
 * @last-modified  14:00 09/10/2017
 */

/**
 * Selects option with given value
 * 
 * @param  {string} select selector
 * @param  {string} value  value
 */
function selectOption(select, value) {
    $(select).children().each(function(){
        if ($(this).val() == value) {
            $(this).attr('selected', 'selected');
        } else {
            $(this).removeAttr('selected');
        }
    }).change();
};

/**
 * Changes input value
 * 
 * @param  {string} input selector
 * @param  {string} value value
 */
function changeValue(input, value) {
    $(input).val(value).change();
};

/**
 * Enables input
 * 
 * @param  {string} input selector
 */
function enable(input) {
    $(input).removeAttr('disabled').change();
};

/**
 * Disables input
 * 
 * @param  {string} input selector
 */
function disable(input) {
    $(input).attr('disabled', 'disabled').change();
};

/**
 * Hide / show selected optgroup
 * 
 * @param  {string} select selector
 * @param  {string} target selector
 */
function cascade(select, target) {
    $(select).on('change', function () {
        var $target = $(target);
        $target.find('optgroup').hide();
        var $optGroup = $target.find('optgroup[label="' + $(this).val() + '"]');
        $optGroup.show();
        if (!$optGroup.find('option[value="' + $target.val() + '"]').length) {
            $target.val('');
        }
    }).change();
};

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
/**
 * Parallax animation
 * Add "data-speed" attribute to ".parallax" element to set speed
 * where data-speed="1" is the fastest
 *
 * @author    Matthias Morin <mat@tangoman.io>
 * @modified  15:57 08/11/2016
 * @version   0.1.2
 * @requires  jQuery
 */
$(function(){
    $('.parallax').each(function(){
        var $element = $(this);
        $(window).scroll(function() {
            // Gets speed parameter from html element
            var intSpeed = $element.data('speed');
            if (!intSpeed) {
                // Sets default speed
                intSpeed = 6;
            }
            // Negative value because we're scrolling upwards
            var intY = -($(window).scrollTop() / intSpeed);
            // Background position
            var strCoords = '50% '+ intY + 'px';
            // Moves background
            $element.css({
                backgroundPosition: strCoords
            });
        });
    });
});

/**
 * Reset button
 *
 * @author    Matthias Morin <mat@tangoman.io>
 * @modified  17:00 19/09/2017
 * @version   0.1.0
 * @requires  jQuery
 */
$(function () {
    $('button[type="reset"]').click(function (e) {
        e.preventDefault();
        $('form').find('input:text, input:password, input[type="number"], select, textarea').val('');
        $('form').find('input:radio, input:checkbox').prop('checked', false);
    });
});

/**
 * Smooth Scrolling
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

/**
 * HTML5 Validation
 * 
 * @author         Matthias Morin <mat@tangoman.io>
 * @last-modified  14:00 09/10/2017
 */

/**
 * Initializes script
 */
 window.onload = init();

function init() {
	var name = document.getElementById('name');
	name.addEventListener('keyup', function (event) {
		if(name.validity.patternMismatch) {
			name.setCustomValidity('Votre nom ne peut comporter que des caractères alphabétiques.');
		} else {
			name.setCustomValidity('');
		}
	});

	var email = document.getElementById('mail');
	email.addEventListener('keyup', function (event) {
		if(email.validity.typeMismatch) {
			email.setCustomValidity('Vous devez renseigner une adresse email valide.');
		} else {
			email.setCustomValidity('');
		}
	});

	var phone = document.getElementById('phone');
	phone.addEventListener('keyup', function (event) {
		if(phone.validity.patternMismatch) {
			phone.setCustomValidity('Vous devez renseigner un numéro de téléphone valide.');
		} else {
			phone.setCustomValidity('');
		}
	});

	var message = document.getElementById('message');
	message.addEventListener('keyup', function (event) {
		if(message.validity.patternMismatch) {
			message.setCustomValidity('Votre message est trop court.');
		} else {
			message.setCustomValidity('');
		}
	});
};
