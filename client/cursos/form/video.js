materialid="";
Template.materialcurso.events({
	'click a': function(e){
		console.log(e.target.name);
		materialid=e.target.name;
	}
});
Template.video.onCreated(function(){
    Meteor.subscribe('data');
});
Template.video.helpers({
    cargarvideo: function(){
        return Material.find({_id:materialid});
    }
});
