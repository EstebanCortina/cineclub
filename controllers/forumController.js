const Comment = require('../models/forum/comment');
const client = require('../db/mongodb');

module.exports = {
  createComment: async (req, res) => {
    const newComment = new Comment({
      author: 'Esteban',
      text: 'Comentario',
      createdAt: new Date(),
      movieId: 73
    });

    try {
      await client.connect();
      //const comments = client.db("forum").collection("comments");
      newComment.save().then(response => { console.log(response) });
      res.json(newComment);
    } catch (error) {
      console.error(error);
    } finally {
      await client.close();
    }
    // Guardar la instancia en la base de datos

  }
}
// Crear una instancia del modelo Message

