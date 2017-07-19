Template.discusion.helpers({

	pregunt:function() {
		return Pregunta.find();

        
	},/*,
	username:function(){
		return Accounts.user().username;
	}*/
	nombre_preg: function(){
		return Meteor.users.findOne({_id:this.id_user});
	},
	idmio: function(){
		//console.log(this.idSource);
		//console.log(this.idSource == Accounts.user()._id);
		return this.id_user == Accounts.user()._id;
	}
 });