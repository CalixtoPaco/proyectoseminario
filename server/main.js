import { Meteor } from 'meteor/meteor';

Meteor.startup(() =>  {
	Meteor.methods({
    "insert":function(datos) {
    	users.insert(datos);
    	return true;
     }
  });
	Meteor.methods({
    "update":function(datos) {
    	users.update(datos);
    	return true;
     }
  });

  // code to run on server at startup
});
Meteor.users.allow({
  update() { return true; }
});
Meteor.publish("datos", function(){
	return users.find();
});




