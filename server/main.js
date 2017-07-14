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
    } 

  });
  
  Meteor.publish('datos', function(){
    return Curso.find();
  });

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
    } 
  });

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
  /*Meteor.users.allow({
    update() { return true; }
  });


  Meteor.publish("dato", function(){
    return users.find();
  });*/
  
});

// code to run on server at startup






