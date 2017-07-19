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
	foto : function(){
		return Accounts.user().profile.foto
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
       var foto2={
		   		"img2" : e.target.img2.placeholder
	   };	
   
		
    console.log(datos,correo);
  
   Meteor.users.update( { _id: Meteor.userId() }, 
   	{ $set: 
   		{ 'profile.nombre': name.nombre, 
   		'profile.carrera': carrer.carrera,
   		'username': datos.username, 
   		'emails':[{address: correo.email}],
   		'profile.foto':  foto2.img2
   		}
   });
    
  }
});

Template.perfil.onCreated(function(){
    this.cargarimg = new ReactiveVar(false);
    Meteor.subscribe('cursoimg');
});
Template.perfil.helpers({
    cargarimg: function(){
        return Template.instance().cargarimg.get();
    }
});
idImgCurso = "";
Template.perfil.events({ 
    'change #imginput'(e, template){
        if (e.currentTarget.files && e.currentTarget.files[0]) {
            upload = imgCurso.insert({
                file: e.currentTarget.files[0],
                streams: 'dynamic',
                chunkSize: 'dynamic'
            }, false);
            upload.on('start', function(){
                template.cargarimg.set(this);
            });
            upload.on('end', function(error, fileObj){
                idImgCurso = fileObj._id;
                //console.log(idImgCurso);
                if (error){
                    alert(error);
                }
                else{
                    //alert('File "' + fileObj.name + '"carga exitosa')
                }
                template.cargarimg.set(false);
            });
            upload.start();
        }
    }
});
Template.perfil.helpers({
    imgDelCurso: function(){
        return imgCurso.findOne({_id: idImgCurso});
    }
});			
