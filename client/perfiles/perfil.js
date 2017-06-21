Template.perfil.onRendered(function(){
	$("select").material_select();
});
Meteor.subscribe('userData');
Template.perfil.helpers({

	username : function(){
		return Accounts.user().username;
	},
	email : function(){
		return Accounts.user().emails[0].address
	},

	password : function(){
		return Accounts.user().password;
	},
	profileNombre : function(){
		return Accounts.user().profile.nombre;
	},
	
	profileCarrera : function(){
		return Accounts.user().profile.carrera;
	}
});

Template.perfil.events({
  'submit form': function(e) {
    e.preventDefault();
    
		var datos = {
			"username" : e.target.username.value, //preguntar al inge si esto e correcto o esta mal
			
			"email" : e.target.email.value,
			"password" : e.target.password.value,
			"profile" : {
			"carrera" : e.target.carrera.value,
			"nombre" : e.target.nombre.value
			            }
               
			};
   
		
    console.log(datos);
    Meteor.users.update(Meteor.userId(),{$set: {user: datos}});
    
  }
});			
