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
