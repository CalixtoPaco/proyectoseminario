Template.formcurso.events({
  "submit form": function(e){
    var datos = {
      titulo: e.target.titulo.value,
      descripcion: e.target.descripcion.value,
      fecha: e.target.fecha.value
    };
    Meteor.call("insert",datos, function(err,result){
    });
    /*console.log(datos);
    Curso.insert(datos);
    e.target.titulo.value = "";
    e.target.descripcion.value = "";
    e.target.fecha.value = "";
    return false;*/

  }
});