import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.methods({ 
    "insert": function(datos) { 
       Curso.insert(datos);
       return true;
    } 
  });
  Meteor.publish('datos', function(){
    return Curso.find();
  });
});
