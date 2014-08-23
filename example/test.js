var path, qrdecoder;

qrdecoder = require('..')();

path = "./a.jpg";

qrdecoder.decode(path, (function(_this) {
  return function(err, out) {
    return console.log(err, out);
  };
})(this));
