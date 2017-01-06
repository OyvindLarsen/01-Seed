var express = require('express');
var router = express.Router();
var bcrypt = require ('bcryptjs');
var jwt = require('jsonwebtoken');

var User = require('../models/user');
const cors = require('cors');
const multer = require('multer');
const path = require('path');




router.post('/', function (req, res, next) {
    var user = new User ({
    	firstName: req.body.firstName,
    	lastName: req.body.lastName,
      profilePic: 'profile-placeholder.jpg',
    	password: bcrypt.hashSync(req.body.password, 10),   //ssl -encrypted data //bcrypthash , salted iterations
    	email: req.body.email
    });
    user.save(function(err, result) {
    	if (err) {
 		return res.status(500).json({
 			title: 'An Error occurred',
 			error: err 
 		});
		}
		res.status(201).json({
			message: 'user created',
			obj: result
		});

    });
    
});

router.post('/signin', function(req, res, next) {
    User.findOne({email: req.body.email}, function(err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An Error occurred',
                error: err 
            });
        }
        if (!user) {
            return res.status(401).json({
                title: 'login failed',
                error: {message: 'Invalid login credentials'}
            });

        }
        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).json({
                title: 'login failed',
                error: {message: 'Invalid login credentials'}
            });
        }
        var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200}); // tid tokenen er i bruk
        res.status(200).json({
            message: 'Succesfully logged in',
            token: token,
            userId: user._id
        });
    });
});

router.get('/profile', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
     User.findById(decoded.user._id, function(err, user){
          if (err) {
               return res.status(500).json({
                    title: 'An Error occurred',
                    error: err 
               });
          }
          res.status(200).json({
                message: 'success',
                obj: user
            });
          
          
     });
 
 });

router.get('/profilepic', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
     User.findById(decoded.user._id, function(err, user){
          if (err) {
               return res.status(500).json({
                    title: 'An Error occurred',
                    error: err 
               });
          }
          res.sendFile('/Desktop/01 Seed/uploads/' + user.profilePic);
          
          
     });
 
 });

router.use(cors());

const upload = multer({
  dest: 'uploads/',
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, '/Desktop/01 Seed/uploads')
    },
    filename: (req, file, cb) => {
      let ext = path.extname(file.originalname);
      cb(null, `${Math.random().toString(36).substring(7)}${ext}`);
    }
  })
});
 

router.post('/upload', upload.any(), (req, res) => {
  res.json(req.files.map(file => {
    let ext = path.extname(file.originalname);
    return {
      originalName: file.originalname,
      filename: file.filename
    }
  }));
});

router.patch('/uploaded', function (req, res, next) {
  var decoded = jwt.decode(req.query.token);
     User.findById(decoded.user._id, function(err, user) {
    if (err) {
        return res.status(500).json({
          title: 'An Error occurred',
          error: err 
        });
      }
      if(!user) {
      return res.status(500).json({
        title: 'No user found',
        error: {message: 'user not found'} 
        });
      }
      user.profilePic = req.body.filename;
      user.save(function(err, result) {
        if (err) {
        return res.status(500).json({
          title: 'An Error occurred',
          error: err 
        });
        }
        res.status(201).json({
          message: 'Updated user',
          obj: result
        });
      });
  });
});


module.exports = router;
