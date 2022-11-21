var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'सुभाषितम्' })
})

router.get('/edit', function (req, res, next) {
  res.render('edit', { title: 'सुभाषितम्' })
})

module.exports = router
