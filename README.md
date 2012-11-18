# Node-ZXing

This is a Node.JS wrapper for [Zebra Crossing aka ZXing](http://code.google.com/p/zxing/).

## Installation

`npm install node-zxing`

## Usage overview

Install ZXing:
```
wget http://zxing.googlecode.com/files/ZXing-2.1.zip
unzip ZXing-2.1
cd zxing-2.1 
ant -f core/build.xml
ant -f javase/build.xml
```

```javascript
var qrdecoder = require('./node-zxing')({ZXingLocation: "/opt/zxing-2.1/"});
var path = "./a.jpg";
qrdecoder.decode(path, 
  function(err, out) {
    console.log(err,out);
  }
);
```

## Options

```javascript
{
	ZXingLocation: "/path",
	try_harder: false // (default)
}
```

## TODO

See the [issue tracker](http://github.com/komola/node-zxing).

## Author

Thomas Schaaf (schaaf@komola.de).
Development was sponsored by [komola](http://www.komola.de/).

## Used by

- [Prismabox](http://prismabox.de/)

## License

(The MIT License)

Copyright (C) 2012 Thomas Schaaf

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
