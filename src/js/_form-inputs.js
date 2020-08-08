/**
 * Form inputs
 * 
 * @author         Matthias Morin <matthias.morin@gmail.com>
 * @last-modified  22:00 27/03/2019
 */

/**
 * Selects option with given value
 * 
 * @param     {string} select selector
 * @param     {string} value  value
 * @requires  jQuery
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
 * @param     {string} input selector
 * @param     {string} value value
 * @requires  jQuery
 */
function changeValue(input, value) {
    $(input).val(value).change();
};

/**
 * Enables input
 * 
 * @param     {string} input selector
 * @requires  jQuery
 */
function enable(input) {
    $(input).removeAttr('disabled').change();
};

/**
 * Disables input
 * 
 * @param     {string} input selector
 * @requires  jQuery
 */
function disable(input) {
    $(input).attr('disabled', 'disabled').change();
};

/**
 * Hide / show selected optgroup
 * 
 * @param     {string} select selector
 * @param     {string} target selector
 * @requires  jQuery
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
