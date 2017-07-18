cursoid="";
Template.contenido.events({
  'click a': function(e){
    console.log(e.target.name);
    cursoid=e.target.name;
  }
});
Template.materialcurso.helpers({
    mate(){
        return Material.find({idcurso:cursoid});
    } 
});



