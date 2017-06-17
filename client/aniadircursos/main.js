Template.form.events({
	"submit form": function(e) {
		var data = {
			text: e.target.text.value,
			date: new Date()
		};
		//Frases.insert(data);
		//e.target.text.value = "";
		//return false;
		Meteor.call("insert",data, function(err,result){

		});
	}
});

Template.layout.helpers({
	ready:function(){
		return FlowRouter.subsReady("data")
	},
	list: function() {
		return Frases.find();
	}
});