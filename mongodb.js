//CRUD create read update delete

const { MongoClient, ObjectId } = require("mongodb");

const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionUrl,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to the database");
    }
    const db = client.db(databaseName);

    db.collection("tasks")
      .find({ completed: false })
      .toArray((error, tasks) => {
        if (error) {
          return console.log("Error occured");
        }
        console.log(tasks);
      });
    db.collection("tasks").findOne(
      { _id: new ObjectId("61c2e537db10aaa85308843f") },
      (error, result) => {
        if (error) {
          return console.log("Error occured");
        }
        console.log(result);
      }
    );
  }
);
