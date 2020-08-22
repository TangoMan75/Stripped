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
