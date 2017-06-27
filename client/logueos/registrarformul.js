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
			"username" : e.target.username.value, //preguntar al inge si esto e correcto o esta mal
			
			"email" : e.target.email.value,
			"password" : e.target.password.value,
			"profile" : {
			"carrera" : e.target.carrera.value,
			"nombre" : e.target.nombre.value
			            }
               
			};
			Accounts.createUser(user,function(e){
             if(e == undefined) {
			$(".formalogin").css("opacity",0);				
			Meteor.loginWithPassword(user.username,user.password);	
				}
			});
			return false;
	}
})