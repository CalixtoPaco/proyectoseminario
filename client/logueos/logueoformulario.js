Template.logueoformulario.events({
	"click #registrarbtn" : function(e){
		e.preventDefault();
		myTemplates.set("registrarformul");
	}
	,
	"click #close" : function(e){
		e.preventDefault();
		$(".formalogin").css("opacity",0);
	},
	"submit form" : function(e){
		
		Meteor.loginWithPassword(e.target.email.value,e.target.password.value);
		$(".formalogin").css("opacity",0);
		return false;
	}
});