const authCheck = (req, res, next) => {
  if (req.session.user)next();
  else res.sendStatus(403);
}

module.exports = authCheck;
