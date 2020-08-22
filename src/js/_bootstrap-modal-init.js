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
