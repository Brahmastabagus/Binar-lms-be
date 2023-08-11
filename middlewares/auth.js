require('dotenv').config()
const jwt = require("jsonwebtoken")
const { users } = require('../models')

module.exports = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(404).json({
        status: 'failed',
        message: "Token not found"
      })
    }

    const bearerToken = req.headers.authorization

    const token = bearerToken.split("Bearer ")[1]

    const payload = jwt.verify(token, process.env.JWT_SIGNATURE_KEY)

    const user = await users.findByPk(payload.id)

    if (user) {
      req.user = user
      next();
    } else {
      return res.status(400).json({
        status: 'failed',
        message: "Token invalid"
      })
    }
  } catch (e) {
    res.status(400).json({
      status: 'failed',
      message: e.message
    })
  }
}