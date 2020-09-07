var express = require('express');
const { connection } = require('mongoose');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient
const url = "mongodb://127.0.0.1:27017"


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('main.html', { title: 'Express' });
// });


router.get('/login', function (req, res, next) {
  res.render('login.html', { title: 'Express' });

});

router.post('/login', function (req, res, next) {


  if (req.body.id == "sc" && req.body.password == "sc") {//ID 와 비밀번호가 일치 한다면

    //id와 비밀번호를 저장한다
    MongoClient.connect(url, { useUnifiedTopology: true }, function(err,db){
      if(err){
        console.log(err)
        res.render('error.jade')
      }
      else{
        var dbo = db.db('caculator')
        
        dbo.collection('documents').insertOne(req.body)
        res.render('main.html');
      }
    })
  
  }
  else {//아이디와 비밀번호가 일치 하지 않앗을 경우

    
  }
  ///mongodb 와 연동하기
});


router.get('/thelist', function (req, res) {
  var MongoClient

  res.render('show.html',{"data":"12"})
})

module.exports = router;
