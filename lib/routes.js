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

var chip = {
    tag: 'chip content',
    image: '', //optional
    id: 1, //optional
};