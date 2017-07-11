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
        BlazeLayout.render("info", {baner:"banner" ,content:"sihay"});    
        BlazeLayout.render("info", {content:"sihay",baner:"banner"});
    }
});


FlowRouter.route('/cursos/', {
    action: function(params, queryParams) {
        BlazeLayout.render("info", { content: "cursodisenio" });
    }
});


FlowRouter.route('/crearcurso/',{
    action: function(params, queryParams){
        BlazeLayout.render("info", {content:"crear"});
        $('.modal').modal();    
    }
});
FlowRouter.route('/crearcurso/form',{
    action: function(params, queryParams){
        BlazeLayout.render("crear", {registrar:"formcurso"});    
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

FlowRouter.route('/admin',{
    subscriptions: function(params, queryParams){
        Meteor.subscribe("mostrar");
    },
    action: function(params, queryParams){
        BlazeLayout.render("info",{content: "admin"});
    }
})