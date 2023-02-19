const renderTemplate = require('../lib/renderTemplate');
const Main = require('../views/Main');

const index = async (req, res) => {
  // try {
  //   const { user } = req.session;
  //   renderTemplate(Main, { user }, res);
  // } catch (error) {
  //   console.log(error);
  // } ===> 3rel
  res.redirect('/books');
};

module.exports = { index };
