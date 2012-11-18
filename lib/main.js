/* Copyright 2012 Thomas Schaaf, see LICENSE */
"use strict";

var exec = require('child_process').exec;

module.exports = function (options) {
  var defaults = options || {};

  if(defaults.ZXingLocation == null) {
    defaults.ZXingLocation = "";
  }

  var commandLineOptions = " ";
  if(defaults.try_harder) {
    commandLineOptions += "--try_harder ";
  }
  return {
    decode: function(path, cb) {
      exec('java -cp '+defaults.ZXingLocation+'/javase/javase.jar:'+defaults.ZXingLocation+'/core/core.jar com.google.zxing.client.j2se.CommandLineRunner'+commandLineOptions+''+path, 
        function(err, stdout, stderr){
          var qrcode = "";
          var errorCache = null;
          console.log(err, stdout, stderr);
          if(err !== null) {
            console.log(err, stdout, stderr);
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