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