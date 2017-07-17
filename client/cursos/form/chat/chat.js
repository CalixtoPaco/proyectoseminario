Template.chat.onRendered(function(){
	//function test(){
	//	console.log(" "+$("#contenedor").height());
	//}
	//setInterval(test,20);
	$("#contenedor").resizeDiv(function(num){
		$(".rectangle_hidden").animate({scrollTop:num},500);
	});
});



Template.chat.events({
  "submit form": function(e){
    var chatdatos = {
      idSource: Accounts.user()._id,
      idDestination: idcanal,
      date: new Date(),
      message: e.target.sms.value
    };
    e.target.sms.value="";
    e.preventDefault();
    Meteor.call("insertchat",chatdatos, function(err,result){
    });
   
  }
});
