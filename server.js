const express = require('express');
const morgan = require('morgan');
const app = express();

const path = require('path');
const staticPath = path.join(__dirname, "./public");
app.use(express.static(staticPath));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

//Router
const router = require('./routes/index');
app.use('/', router);

//Mongo test
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://esteban:yamJCMbUuRiA88CM@foro.ezbez1p.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useUnifiedTopology: true });

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection

    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    const comments = client.db("forum").collection("comments");
    const newComment = {
      author: 'Juan',
      content: 'Este es un nuevo comentario',
      date: new Date(),
    };
    await comments.insertOne(newComment)
  } catch (error) {
    console.error(error.message);
  } finally {
    await client.close();
  }
}
run();

app.listen(3000)