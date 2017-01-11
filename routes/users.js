var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var path = require('path');
var User = require('../models/user');

router.use('/', function (req, res, next){
     jwt.verify(req.query.token, 'secret', function(err, decoded) {
          if (err) {
               return res.status(401).json({
                    title: 'Not authenticated',
                    error: err
               });
          }
          next();
     })
});


router.get('/', function (req, res, next) {
 	User.find()
        .exec(function(err, users){
			if (err) {
	     		return res.status(500).json({
	     			title: 'An Error occurred',
	     			error: err 
	     		});
     		}
     		res.status(200).json({
     			message: 'success',
     			obj: users
     		});
		});

});

router.post('/follow', function (req, res, next) {
     var decoded = jwt.decode(req.query.token);
     User.findById(req.body.userId, function(err, user){
          if (err) {
               return res.status(500).json({
                    title: 'An Error occurred',
                    error: err 
               });
          }
          
          User.findById(decoded.user._id, function(err2, followUser){
               if (err2) {
                    return res.status(500).json({
                         title: 'An Error occurred',
                         error: err 
                    });
               }
               if(user.follow.indexOf(decoded.user._id) === -1){
                    user.follow.push(followUser);
                    user.save();
                    return res.status(201).json({
                         message: 'Saved follower',
                    });

               }
              


               
          });
     });
});

router.patch('/follow', function (req, res, next) {
     var decoded = jwt.decode(req.query.token);

     User.findById(req.body.userId, function(err, user){
          if (err) {
               return res.status(500).json({
                    title: 'An Error occurred',
                    error: err 
               });
          }
          var a = 0;
          for (let penis of user.follow) {
               if (penis == decoded.user._id) {
                    
                    user.follow.splice(a, 1);
                    user.save();
                    return res.status(202).json({
                         message: 'deleted follower',
                    });
                }
                a++;

          }
     });
});
 


module.exports = router;