require('dotenv').config()
const { users } = require('../models')
const jwt = require("jsonwebtoken")

const getUsers = async (req, res) => {
  const data = await users.findAll({
    include: { all: true, nested: true },
    attributes: { exclude: "number" }
  })

  try {
    if (data.length) {
      return res.status(200).json({
        status: "success",
        data
      })
    } else {
      return res.status(500).json({
        status: "failed",
        message: "No Available data."
      })
    }

  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message
    })
  }
}

const login = async (req, res) => {
  try {
    const { number } = req.body

    if (number.toString().length != 4) {
      return res.status(404).json({
        status: 'failed',
        message: `Number must contain 4 digits`
      })
    }

    const user = await users.findOne({
      where: {
        number
      }
    })

    if (!user) {
      return res.status(404).json({
        status: 'failed',
        message: `Your account was not found`
      })
    }

    if (user && number == user.number) {
      const token = jwt.sign({
        id: user.id,
        name: user.name
      }, process.env.JWT_SIGNATURE_KEY)

      res.status(200).json({
        status: `success`,
        message: `You have successfully logged in`,
        data: {
          token
        }
      })
    }

  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message
    })
  }
}

module.exports = {
  getUsers,
  login
}