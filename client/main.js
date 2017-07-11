(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    

  }); // end of document ready
})(jQuery); // end of jQuery name space
Template.info.onRendered(function(){
	$('.button-collapse').sideNav();
    $('.parallax').parallax();
    $(".formalogin").css("opacity",0);
});
Template.crear.onRendered(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.modal').modal();
});
Template.contenido.onRendered(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
});
Template.formcurso.onRendered(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
});

Template.info.helpers({
	username : function(){
		return Accounts.user().username;
	},
	ready: function(){
    return FlowRouter.subsReady("datos");
  	},
	crear : function(){
		return Curso.find();
	},
    cursodisenio : function(){
        return Material.find();
    }
});

Template.info.events({
	"click #login" : function(){
		$(".formalogin").css("opacity",1);
	},

	"click #logout" : function(){
		Meteor.logout();
	}

});

