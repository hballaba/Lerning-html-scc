/*
jQuery('document').ready(function() {
    jQuery('body').append('<a href="http://google.com"> Go to google<a/>');

    jQuery('div').remove(); // delete value tag "div"

    let clone = jQuery('p').clone();

    jQuery('body').append(clone);


}) //this construction allows include file.js in head
*/

/*
jQuery('document').ready(function() {
    jQuery('button').on('click', function(){ //событие  кликнуть
        let value1, value2, value3;
        value1 = jQuery('#val1').val();
        value2 = jQuery('#val2').val();
        value3 = parseInt(value1) + parseInt(value2);
        alert(value3);
    }) // calculate after push button
*/
jQuery('document').ready(function() {    // событие ready когда страница загружена
    jQuery('input').on('keyup', function(){ //событие отпустить кнопку
        let value1, value2, value3;
        value1 = jQuery('#val1').val();
        value2 = jQuery('#val2').val();
        value3 = parseInt(value1) + parseInt(value2);
        // alert(value3);
        jQuery('#result').html(value3);
    })

})

jQuery('document').ready(function() {    // событие ready когда страница загружена

    let value1, value2, value3;
    value1 = prompt('Enter your name', "");
    jQuery('#result').html(value1);

    value2 = confirm('Delete?');
    jQuery('#result').html(value2);

})

// jQuery('body').append('<a href="http://google.com"> Go to google<a/>');
// for this need include out head and body
