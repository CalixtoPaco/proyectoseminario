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
/*var manager = new SubsManager();
Template.formUpload.onCreate(function(){
  self = this;
  self.readyFiles = new ReactiveVar(false);
  self.autorun(function(){
    var handler = manager.subscribe("getFiles");
    self.readyFiles.set(handler.ready());
  });
});
Template.formUpload.events({
  "change fileImages": function(e,template){
    console.log("ok");
    //template.readyFiles
  }
});*/
/*Template.formUpload.onRendered(function(){
  $(".modal").modal();
});*/