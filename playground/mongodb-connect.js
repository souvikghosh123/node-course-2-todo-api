//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

// var user = {name: 'Sam', age: 30};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err,client) {
  if(err) {
      return console.log('Unable to connect to MongoDB server');
  } 
  console.log('Connected to MongoDB server'); 
//   const db = client.db('TodoApp')
//   db.collection('Todos').insertOne({
//       text: 'Something to do',
//       completed: false
//   }, function(err, result) {
//       if(err) {
//         return console.log('Unable to insert todo', err);
//       }
//       console.log(JSON.stringify(result.ops, undefined, 2));
//   });

    // const db = client.db('UsersApp')
    // db.collection('Users').insertOne({ 
    //   name: 'Arnab Goswami',
    //   age: 48,
    //   location: 'Mumbai'
    // }, function(err, result) {
    //   if(err) {
    //     return console.log('Unable to insert users', err);
    //   }
    //   console.log(result.ops[0]._id.getTimestamp());
    //  });
  client.close();
});

