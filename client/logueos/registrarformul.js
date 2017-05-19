Template.registrarformul.onRendered(function(){
	$("select").material_select();
});
Template.registrarformul.events({
	"click #return" : function(){
		myTemplates.set("logueoformulario");
	},
	"click #close" : function(){
		$(".formalogin").css("opacity",0);
	},
	"submit form" : function(e){
		var user = {
			"nombres" : e.target.nombres.value,
			"apellidos" : e.target.apellidos.value,
			"nick" : e.target.nick.value,
			"email" : e.target.email.value,
			"contraseña" : e.target.contraseña.value,
			"profile" : {
				"carrera" : e.target.carrera.value
				}
			};
			
			Accounts.createUser(user, function(e){
				if(e == undefined) {
					$(".formalogin").css("opacity",0);				
					
					Meteor.loginWithPassword(user.username,user.password);	
				}
				
			});
			return false;
	}
})