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



var chip = {
    tag: 'chip content',
    image: '', //optional
    id: 1, //optional
};


<<<<<<< HEAD
  }); // end of document ready
})(jQuery); // end of jQuery name space
//hola
=======
$('.chips-initial').material_chip({
    data: [{
        tag: 'Apple',
    }, {
        tag: 'Microsoft',
    }, {
        tag: 'Google',
    }],
});
$('.chips-placeholder').material_chip({
    placeholder: 'Enter a tag',
    secondaryPlaceholder: '+Tag',
});
$('.chips-autocomplete').material_chip({
    autocompleteOptions: {
        data: {
            'Apple': null,
            'Microsoft': null,
            'Google': null
        },
        limit: Infinity,
        minLength: 1
    }
});
>>>>>>> ba1023c2f34c795282936e91e6f3e3e3abba96d4
