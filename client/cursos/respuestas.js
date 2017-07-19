Template.respuesta.events({
	"submit form": function(e) {
		console.log(e.target.mensaje.value)
		var datosres= {
			mensaje: e.target.mensaje.value,
			date3: new Date()
		};
		Meteor.call("insertres",datosres, function(err,result){

		});
	}
});
Template.messages.helpers({

	message() {
		return Respuesta.find();

	}
 });