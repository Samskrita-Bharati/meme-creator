var express = require('express')
const fetch = require('node-fetch')
var router = express.Router()


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'सुभाषितम्' })
})

router.get('/edit', function (req, res, next) {
  //res.end('Hello, World!');
  res.render('edit', { title: 'सुभाषितम्' })
})

router.get('/generative', function (req, res, next) {
  res.render('generative', { title: 'सुभाषितम्' })
})

router.get('/about', function (req, res, next) {
  res.render('about', { title: 'सुभाषितम्' })
})

router.get('/getImage', function(req, res, next){
  const keyword = req.query.keyword || 'sunrise'
  
  const url = `https://hi.final-tou.ch/_/generate/greeting?superlative=${keyword}&artifacts=&batch_size=1&style=a%20digital%20painting%20of%20(({}))%20on%20a%20navy%20blue%20sunset%20dark%20abstract%20dark%20background`  
  fetch(url)
  .then(resp => {
    if(!resp.ok) {
      throw new Error(`HTTP error, status = ${response.status}`);
      }
      return resp.json()
  })
  .then(data => {
    res.json(data)
  })
})
module.exports = router
