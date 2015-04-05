/**
 * Created by Sarfraz on 4/3/2015.
 */

$(function () {
    // lowercase link hrefs
    $('a.lowercase').each(function () {
        this.href = this.href.toLowerCase();
    });

    // set nav link as selected if on the page
    var pageArray = document.location.href.split('/');
    var page = pageArray[pageArray.length - 1];
    $('.page-links a[href*="' + page + '"]').closest('li').addClass('active');
});
