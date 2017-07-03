FlowRouter.route('/',{
    subscriptions: function(params, queryParams){
        this.register("datos", Meteor.subscribe("datos"));
    },
    action: function(params, queryParams){
        var sihay = "";
        if (Curso.find().count() == 0) {
            sihay = "";
        } else {
            sihay = "contenido";
        }
        //console.log(sihay);
        BlazeLayout.render("info", {banner:"banner" ,content:"sihay"});    
    }
});
/*FlowRouter.route('/', {
    action: function(params, queryParams) {

        BlazeLayout.render("info", {content:"contenido"});    
    }
<<<<<<< HEAD
});*/



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

FlowRouter.route('/crearcurso/',{
    action: function(params, queryParams){
        BlazeLayout.render("info", {registrar:"crear"});
        $('.modal').modal();    
    }
});


FlowRouter.route('/perfil.html', {
    action: function(params, queryParams) {
        BlazeLayout.render("info", { content: "perfil" });
        $('.modal').modal();


    },
    subscriptions:function(params, queryParams) {
        this.register("dato", Meteor.subscribe("dato"));
    },
    ownsperfil : function(userId, datos) {
      return dato && dato.userId === userId;
    }
});
