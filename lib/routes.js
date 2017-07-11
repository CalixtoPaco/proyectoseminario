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

FlowRouter.route('/cursos/', {
    action: function(params, queryParams) {
        var exist = "";
        if (Material.find().count() == 0) {
            exist = "";
        } else {
            exist = "materialcurso";
        }
        console.log(exist);
  BlazeLayout.render("info", {contentmat:"exist"});

        BlazeLayout.render("info", { registro: "cursodisenio"});
        $('.modal').modal();

    },
        subscriptions: function(params, queryParams){
        this.register("data", Meteor.subscribe("data"));
    },

        
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
