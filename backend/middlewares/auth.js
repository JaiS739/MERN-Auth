const jwt = require("jsonwebtoken");

async function auth(req, res, next) {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(400).json({ message: "unauthorised" });
    const verified_token = jwt.verify(token, "jaiho");
    // it is same like decoded:-
    req.user = verified_token.user;
    next();
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "unauthorised" });
  }
}

module.exports = auth;
