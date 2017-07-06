Template.perfil.onRendered(function(){
	$("select").material_select();
	$('.moadl').modal();
});
/*Meteor.subscribe('datos');*/
Template.perfil.helpers({

	username : function(){
		return Accounts.user().username;
	},
	email : function(){
		return Accounts.user().emails[0].address;
	},

	password : function(){
		return Accounts.user().password;
	},
	profileNombre : function(){
		return Accounts.user().profile.nombre;
	},
	
	profileCarrera : function(){
		return Accounts.user().profile.carrera;
	},
	  owndatos: function() {
    return this.userId === Meteor.userId();
  }
});


Template.perfil.events({
  'submit form': function(e) {
    e.preventDefault();
    
		var datos = {
			"username" : e.target.username.value //preguntar al inge si esto e correcto o esta mal
			
				
			/*"profile" : {
			
			            }*/};
	   var correo={
               "email" : e.target.email.value
	   };
	   var carrer={
               "carrera" : e.target.carrera.value
	   };
	   var name={
               "nombre" : e.target.nombre.value
	   };
               
			
   
		
    console.log(datos,correo);
  
   Meteor.users.update( { _id: Meteor.userId() }, { $set: { 'profile.nombre': name.nombre, 'profile.carrera': carrer.carrera,'username': datos.username, 'emails':[{address: correo.email}]}} );
    
  }
});			
