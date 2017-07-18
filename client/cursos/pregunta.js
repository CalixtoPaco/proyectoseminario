Template.pregunta.events({
	"submit form": function(e) {
		console.log(e.target.text.value)
		var datospre= {
			text: e.target.text.value,
			date2: new Date()
		};
		//Pregunta.insertpregunta(datopre);
		//e.target.text.value = "";
		//return false;
		Meteor.call("insertpregunta",datospre, function(err,result){

		});
	}
});

