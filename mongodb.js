//CRUD create read update delete

const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionUrl,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to databse");
    }
    console.log("Connected to database!");

    const db = client.db(databaseName);
    // db.collection('users').insertMany({
    //     name:"Saba",
    //     age:23
    // }, (error, result) => {
    //     if (error) {
    //         return console.log("Unable to connect to database")
    //     }
    //     console.log(result.insertedId)
    // })
    // db.collection('users').insertMany([
    //     {
    //         name:"Saba",
    //         age:24
    //     },
    //     {
    //         name:"Saba",
    //         age:25
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log(error)
    //     }
    //     console.log(result.insertedIds)
    // })

    db.collection("tasks").insertMany(
      [
        { descirption: "Study node", completed: false },
        { descirption: "Study Angular", completed: false },
        { descirption: "Work out", completed: true },
      ],
      (error, result) => {
        if (error) {
          return console.log("Unable to connect to the database");
        }
        console.log(result.insertedIds);
      }
    );
  }
);
