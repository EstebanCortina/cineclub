const { MongoClient, ServerApiVersion } = require('mongodb');
//const { uri } = require('../config/config');
const uri = 'mongodb+srv://esteban:yamJCMbUuRiA88CM@foro.ezbez1p.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useUnifiedTopology: true });
module.exports = client;
/*
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

*/