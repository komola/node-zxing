/* Copyright 2012 Thomas Schaaf, see LICENSE */
"use strict";

var exec = require('child_process').exec;

module.exports = function (ZXingLocation) {
  if(ZXingLocation == null) {
    ZXingLocation = "./"
  }

  var commandLineOptions = " ";
  if(defaults.try_harder) {
    commandLineOptions += "--try_harder ";
  }
  return {
    decode: function(path, cb) {
      qrcode = "";
      exec('java -cp '+ZXingLocation+'/javase/javase.jar:'+ZXingLocation+'/core/core.jar com.google.zxing.client.j2se.CommandLineRunner'+commandLineOptions+''+path, function(err, stdout, strerr){
        if(err !== null) {
          console.log(err, stdout, stderr);
          cb(error, '');
        } else {
          console.log(stdout);
          cb(null, stdout);
        }
      });
    }
  };
}