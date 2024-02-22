const jwt = require("jsonwebtoken");

export const generateAccessToken = (user) => {
  const options = {
    expiresIn: "30m",
    algorithm: "HS256",
  };
  return jwt.sign(user, process.env.ACCESS_TOKEN, options);
};

export const authenticateToken = (req, res, next) => {
  const authHeader = req.authHeader;
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) res.status(401).json({ message: "Unauthorized - Missing token" });
  jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
    if (err || !user) {
      if (err.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Expired token" });
      }
      return res.status(403).json({ message: "Forbiden - Invalid token" });
    }
    req.user = user;
    next();
  });
};
