const {
  getOrderStatusAll,
  getOrderStatusOne,
} = require('../services/orderStatuses')

module.exports = {
  async onGetAll(req, res) {
    try {
      res.status(200).json({
        status: 200,
        data: await getOrderStatusAll(),
      })
    } catch {
      res.status(500).json({ status: 500, message: err.message })
    }
  },

  async onGetById(req, res) {
    const id = req.params.id
    try {
      res.status(200).json({ status: 200, data: await getOrderStatusOne(id) })
    } catch (err) {
      res.status(500).json({ status: 500, message: err.message })
    }
  },
}
