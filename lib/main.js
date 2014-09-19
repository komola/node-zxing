/* Copyright 2012 Thomas Schaaf, see LICENSE */
"use strict";

var exec = require('child_process').exec;
var path = require('path');

module.exports = function (options) {
  var defaults = options || {};

  if(defaults.ZXingLocation == null) {
    defaults.ZXingLocation = path.join(__dirname, "..", "zxing");
  }

  if(defaults.ZXingVersion == null) {
    defaults.ZXingVersion = "-3.1.0"
  }

  var commandLineOptions = " ";
  if(defaults.try_harder) {
    commandLineOptions += "--try_harder ";
  }
  if(defaults.multi) {
    commandLineOptions += "--multi ";
  }
  return {
    decode: function(filePath, cb) {
      exec('java -cp '+path.join(defaults.ZXingLocation, 'javase', 'javase'+defaults.ZXingVersion+'.jar')+':'+path.join(defaults.ZXingLocation, 'core', 'core'+defaults.ZXingVersion+'.jar')+' com.google.zxing.client.j2se.CommandLineRunner'+commandLineOptions+''+filePath,
        function(err, stdout, stderr){
          var qrcode = "";
          var errorCache = null;
          if(err !== null) {
            errorCache = err;
          } else {
            var lines = stdout.split("\n");

            for(var i in lines) {
              if(lines[i] == 'Raw result:') {
                qrcode = lines[parseInt(i)+1];
                break;
              }
            }

          }
          cb(errorCache, qrcode);
        }
      );
    }
  };
}
