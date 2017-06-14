FlowRouter.route('/', {
    action: function(params, queryParams) {
        BlazeLayout.render("info", { content: "contenido" ,banner:"banner"});
    }
});
FlowRouter.route('/cursos/', {
    action: function(params, queryParams) {
        BlazeLayout.render("info", { content: "cursodisenio" });
    }
});
FlowRouter.route('/cursos/', {
    action: function(params, queryParams) {
        BlazeLayout.render("info", { content: "cursohtml" });
    }
});
FlowRouter.route('/cursos/cursonode.html', {
    action: function(params, queryParams) {
        BlazeLayout.render("info", { content: "cursonode" });
    }
});
FlowRouter.route('/perfil.html', {
    action: function(params, queryParams) {
        BlazeLayout.render("info", { content: "perfil" });
    }
});

FlowRouter.route('/soporte', {

    subscriptions: function(params,queryParams){
        //console.log(queryParams);
        this.register("getMSN",Meteor.subscribe("getMSN",queryParams.idus,queryParams.id));
        this.register("getConnections",Meteor.subscribe("getConnections")); 
    },
    action: function(params, queryParams) {
        BlazeLayout.render("info", { banner:"banner_nav", content:"soporteTemplate"});
    }
});
