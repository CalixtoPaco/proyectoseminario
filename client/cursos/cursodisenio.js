Template.cursodisenio.events({
  "submit form": function(e){
    var data = {
      title: e.target.title.value,
      description: e.target.description.value,
      
    };
    
    Meteor.call("insert3",data, function(err,result){
    });
console.log(data);


  }
});


