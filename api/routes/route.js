'use strict';
module.exports = function(app) {

  app.route('/')
    .post(function(req,res){
                res.send("Root folder "+req.body.response)
            });

};