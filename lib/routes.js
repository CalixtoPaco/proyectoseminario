FlowRouter.route('/', {
    action: function(params, queryParams) {

        BlazeLayout.render("info", {content:"contenido"});    
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
        $('.modal').modal();

    },
    subscriptions:function(params, queryParams) {
        this.register("datos", Meteor.subscribe("datos"));
    },
    ownsperfil : function(userId, datos) {
      return datos && datos.userId === userId;
    }
});







