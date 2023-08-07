require('dotenv').config()
const { todos } = require('../models')

const getTodos = async (req, res) => {
  const data = await todos.findAll({
    include: { all: true, nested: true },
    order: [["priority", "Asc"]]
  })

  try {
    if (data.length) {
      return res.status(200).json({
        status: "success",
        data: data
      })
    } else {
      return res.status(500).json({
        status: "No available data",
        data: []
      })
    }

  } catch (error) {
    res.status(400).json({
      status: "success",
      message: error.message
    })
  }
}

const getTodoUser = async (req, res) => {
  try {
    // const { name, price, stock } = req.body
    const id = req.params.id
    const data = await todos.findAll({
      where: {
        user_id: id
      },
      order: [["priority", "Asc"]]
    })

    // TODO: Validasi apakah id ada
    if (data !== null) {
      return res.status(200).json({
        status: 'success',
        data
      })
    } else {
      return res.status(404).json({
        status: 'failed',
        message: `Data with id ${id}, not found`
      })
    }
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message
    })
  }
}

const postTodo = async (req, res) => {
  try {
    const datas = req.body

    await todos.create({
      ...datas,
      user_id: req.user.id
    })

    res.status(201).json({
      status: 'success',
      message: "Data has been successfully added"
    })
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message
    })
  }
}

const updateTodo = async (req, res) => {
  try {
    const datas = { ...req.body }
    const id = req.params.id

    const dataId = await todos.findByPk(id)

    // TODO: Validasi apakah id ada
    if (dataId === null) {
      return res.status(404).json({
        status: 'failed',
        message: `Data with id ${id}, not found`
      })
    }

    await todos.update({
      ...datas
    }, {
      where: {
        id
      }
    })

    res.status(200).json({
      status: 'success',
      message: `Data with index ${id} has been successfully updated`
    })
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message
    })
  }
}

const deleteTodo = async (req, res) => {
  try {
    const id = req.params.id

    const dataId = await todos.findByPk(id)

    // TODO: Validasi apakah id ada
    if (dataId === null) {
      return res.status(404).json({
        status: 'failed',
        message: `Data with id ${id}, not found`
      })
    }

    await todos.destroy({
      where: {
        id
      }
    })

    res.status(200).json({
      status: 'success',
      message: `The data with index ${id} has been successfully deleted`
    })
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message
    })
  }
}

module.exports = {
  getTodos,
  getTodoUser,
  postTodo,
  updateTodo,
  deleteTodo
}