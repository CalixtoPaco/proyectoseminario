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
       var exist = "";
        if (Material.find().count() == 0) {

            exist = "";
        } else {
            exist = "contenido";
        }
        //console.log(sihay);
        BlazeLayout.render("info", {baner:"banner" ,content:"exist"});
         BlazeLayout.render("info", {content:"cursodisenio"});
        $('.modal').modal();
       

    },
        subscriptions: function(params, queryParams){
        this.register("data", Meteor.subscribe("data"));
    }

});

FlowRouter.route('/cursos/form',{
    action: function(params, queryParams){
        BlazeLayout.render("info", {content:"video"});    
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
});
FlowRouter.route('/curso/form',{
    subscriptions: function(params,queryParams){

    },
    action: function(params, queryParams){
        BlazeLayout.render("info", {content:"video"});
    }
});

FlowRouter.route('/cursos',{
    subscriptions: function(params,queryParams){
        //console.log(queryParams);
        this.register("getMSN",Meteor.subscribe("getMSN",queryParams.idus,queryParams.id)); 
    },
    action: function(params, queryParams){
        BlazeLayout.render( "info", {content:"video"});
    }
});