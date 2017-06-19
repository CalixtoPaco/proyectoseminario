FlowRouter.route('/', {
    action: function(params, queryParams) {

/*
var exsiste = "";
        if (Curso.find().count() == 0) {
            sihay = "";
        } else {
            sihay = "cursos";
        }
        console.log(sihay);*/
        BlazeLayout.render("info", {content:"contenido"});    
    }
});

/*FlowRouter.route('/botones/',{
    action: function(params, queryParams){
        BlazeLayout.render("perfil", {content:"crearcurso"});    
    }
});
*/
/*FlowRouter.route('/perfiles/',{
    action: function(params, queryParams){
        BlazeLayout.render("perfil", {registrar:"formulario"});    
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
FlowRouter.route('/perfil.html', {
    action: function(params, queryParams) {
        BlazeLayout.render("info", { content: "perfil" });
    }
});

/*
FlowRouter.route('/crearcurso.html', {
    action: function(params, queryParams) {
        BlazeLayout.render("info", { content: "crearcurso" });
    }
});
*/







