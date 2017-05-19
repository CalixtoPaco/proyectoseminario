(function($) {
    $(function() {

        $('.button-collapse').sideNav();
        $('.parallax').parallax();

    }); // end of document ready
})(jQuery); // end of jQuery name space

Template.info.onRendered(function() {
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
});



/*var chip = {
    tag: 'chip content',
    image: '', //optional
    id: 1, //optional
};*/
