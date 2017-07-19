import { Meteor } from 'meteor/meteor';


Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('cursoimg', function(){
    return imgCurso.find().cursor;
  });
  Meteor.methods({ 
    "insert": function(datos) { 
       Curso.insert(datos);
       return true;
    },
    "update": function(rol){
      Roles.addUsersToRoles(rol, ['profesor']);
      return true;
    },
    "eliminar": function(rol){
      Roles.removeUsersFromRoles(rol, ['profesor']);
      return true;
    },

//parte de pregunta a la base de datos ------------------------
        "insertpregunta":function(datospre) {
         
     Pregunta.insert(datospre);
      return true;
     } ,
// parte de respuesta de discusiones--------------------
     "insertres":function(datosres) {
         
     Respuesta.insert(datosres);
      return true;
     } 

  });

Respuesta.remove({});
//parte de discusiones---------------------------------
        Meteor.publish("datospre", function(){
        return Pregunta.find();
      });

//parte de respuesta -----------------------------------

       Meteor.publish("datosres", function(){
          return Respuesta.find();
        });
//---------------------------------------
  Meteor.publish('datos', function(){
    return Curso.find();
  });
//Pregunta.remove({});
//Respuesta.remove({});
  Meteor.methods({
    "insert2":function(dato) {
      users.insert(dato);
      return true;
     }
  });

  /*Meteor.methods({
    "updates":function(dato) {*/

 Meteor.methods({
    "updates":function(dato) {

      users.update(dato);
      return true;
     }
  });
    Meteor.methods({ 
    "insert3": function(data) { 
       Material.insert(data);
       return true;
    },
    "insertchat": function(chatdatos){
      CHAT.insert(chatdatos);
       return true; }
  });
//Material.remove({});
  Meteor.users.allow({
    update() { return true; }
  });
  Meteor.publish("dato", function(){
    return users.find();
  });
  Meteor.publish("allUsers", function(){
    return Meteor.users.find({});
  });
  Meteor.publish('mostrar', function(){
    return Meteor.users.find();
  });

  Meteor.publish('data', function(){
    return Material.find();
  });
  Meteor.users.allow({
    update() { return true; }
  });


  Meteor.publish("dato", function(){
    return users.find();
  });
  

});

// code to run on server at startup






