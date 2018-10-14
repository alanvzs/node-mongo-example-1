var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

exports.index = function ( req, res, next ){
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("eats");
    dbo.collection("restaurants").findOne({}, function(err, result) {
      if (err) throw err;
      db.close();
      res.json(result);
    });
  });
};
