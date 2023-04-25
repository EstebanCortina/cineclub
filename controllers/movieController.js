const { getTranslatedData, getMovieData } = require('../modules/getMovie');
module.exports = async (req, res) => {
  let response = []
  try {
    let originalMovie = await getMovieData();
    response = await getTranslatedData();
    response.push(originalMovie);
    res.status(200);
    res.json(response);
  } catch (error) {
    res.status(404);
    console.error(error);
  }
}