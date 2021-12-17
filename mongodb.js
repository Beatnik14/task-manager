//CRUD create read update delete

const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient

const connectionUrl = "mongodb://127.0.0.1:27017"
const databaseName = "task-manager"

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
    if (error) {
       return  console.log("Unable to connect to databse")
    } 
    console.log("Connected to database!")

    const db = client.db(databaseName)
    db.collection('users').insertOne({
        name:"Saba",
        age:22
    })
})