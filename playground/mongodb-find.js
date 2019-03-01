//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'Sam', age: 30};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err,client) {
  if(err) {
      return console.log('Unable to connect to MongoDB server');
  } 
  console.log('Connected to MongoDB server'); 
  
  // const db = client.db('TodoApp')
  // db.collection('Todos').find({
  //   _id: new ObjectID('5c78d25162f82361e5405111')
  // }).toArray().then(function(docs) {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, function(err) {
  //   console.log('Unable to fetch todos', err);
  // });
  // client.close();

  // const db = client.db('TodoApp')
  // db.collection('Todos').find().count().then(function(count) {
  //   console.log(`Todos count: ${count}`);
  // //  console.log(JSON.stringify(docs, undefined, 2));
  // }, function(err) {
  //   console.log('Unable to fetch todos', err);
  // });
  // client.close();


  const db = client.db('UsersApp')
  db.collection('Users').find({name: 'Arnab Goswami'}).toArray().then(function(docs) {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, function(err) {
    console.log('Unable to fetch users', err);
  });
  client.close();
});

