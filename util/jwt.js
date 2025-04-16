const jwt = require("jsonwebtoken");
const { config } = require("../config");
const { promisify } = require("util");
const secret = config.jwtSecret;
const verify = promisify(jwt.verify);
const sign = promisify(jwt.sign);

const createToken = async (payload) => {
  return await sign(payload, secret, { expiresIn: "1h" });
};

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "请先登录" });
  }
  try {
    const decoded = await verify(token?.split("Bearer ")[1], secret);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(402).json({ message: "Token 无效" });
  }
};

module.exports = {
  createToken,
  verifyToken,
};
