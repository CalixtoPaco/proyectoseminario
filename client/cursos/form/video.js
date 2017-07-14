Template.video.onCreated(function(){
    Meteor.subscribe('data');
});
Template.video.helpers({
    cargarvideo: function(){
        return Material.find();
    }
});
