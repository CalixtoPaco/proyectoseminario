Template.info.onRendered(function(){
	$('.button-collapse').sideNav();
    $('.parallax').parallax();
    $(".formalogin").css("opacity",0);
});

Template.info.helpers({
	username : function(){
		return Accounts.user().username;
	}
})

Template.info.events({
	"click #login" : function(){
		$(".formalogin").css("opacity",1);
	},

	"click #logout" : function(){
		Meteor.logout();
	}

});