
myTemplates = new ReactiveVar();
myTemplates.set("logueoformulario");
Template.logueomenu.helpers({
	template : function(){
		return myTemplates.get();
	}
});