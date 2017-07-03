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

  Meteor.methods({
    "insert2":function(dato) {
      users.insert(dato);
      return true;
     }
  });
  Meteor.methods({
    "update":function(dato) {
      users.update(dato);
      return true;
     }
  });
});

// code to run on server at startup

Meteor.users.allow({
  update() { return true; }
});
Meteor.publish("dato", function(){
	return users.find();

});




