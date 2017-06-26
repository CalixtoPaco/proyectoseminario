MyCollection = new Mongo.Collection('myCollection');

var myData = {
   key1: "value 1...",
   key2: "value 2...",
   key3: "value 3...",
   key4: "value 4...",
   key5: "value 5..."
}

MyCollection.insert(myData);

var findCollection = MyCollection.find().fetch();
var myId = findCollection[0]._id;

var updatedData = {
   key1: "updated value 1...",
   key2: "updated value 2...",
   key3: "updated value 3...",
   key4: "updated value 4...",
   key5: "updated value 5..."
}

MyCollection.update(myId, updatedData);

var findUpdatedCollection = MyCollection.find().fetch();
console.log(findUpdatedCollection);