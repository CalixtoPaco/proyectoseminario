Template.pregunta.events({
	"submit form": function(e) {
		console.log(e.target.text.value)
		var datospre= {
			id_user: Accounts.user()._id,
			text: e.target.text.value,
			date2: new Date()
		};
		//Pregunta.insertpregunta(datopre);
		e.target.text.value = "";
		 e.preventDefault();
		//return false;
		Meteor.call("insertpregunta",datospre, function(err,result){

		});
	}
});

