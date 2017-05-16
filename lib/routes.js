FlowRouter.route('/', {
    action: function(params, queryParams) {
        BlazeLayout.render("info", { content: "contenido" });
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

var chip = {
    tag: 'chip content',
    image: '', //optional
    id: 1, //optional
};