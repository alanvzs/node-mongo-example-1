const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/eats');

const Restaurant = mongoose.model('Restaurant', { name: String });

exports.index = function ( req, res, next ){
  Restaurant.find().exec(function (err, result) {
    res.json(result);
  });
};

exports.store = function ( req, res, next ){
  const restaurant = new Restaurant({ name: req.body.name });
  restaurant.save().then(() => {
    res.json({ status: "created" });
  });
};
