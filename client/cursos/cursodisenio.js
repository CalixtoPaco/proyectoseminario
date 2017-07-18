cursoid="";
Template.contenido.events({
  'click a': function(e){
    console.log(e.target.name);
    cursoid=e.target.name;
  }
});
Template.cursodisenio.events({
  "submit form": function(e){
    var data = {
      title: e.target.title.value,
      description: e.target.description.value,
      idcurso: cursoid,
      iduspro: Accounts.user()._id,
      video: e.target.imagen.placeholder,
      archivo: e.target.files.placeholder
    };
    e.target.title.value = "";
    e.target.description.value = "";
    e.target.imagen.placeholder = "";
    e.target.files.placeholder = "";
    e.preventDefault();
    Meteor.call("insert3",data, function(err,result){
    });
	console.log(data);
  }
});


