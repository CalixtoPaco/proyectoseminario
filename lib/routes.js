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
        BlazeLayout.render("info", { banner:"banner" , content: "contenido"});
    }
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
Posts = new Mongo.Collection('posts');