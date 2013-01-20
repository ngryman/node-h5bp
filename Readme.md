
# h5bp <sup>0.0.3</sup>

HTML5 boilerplate (H5BP) inspired server config for node.js.


## Example

```
npm install h5bp --save
```

```js
var h5bp = require('../h5bp')
  , app = h5bp.createServer({ server: 'express' })

app.get('/hello-world', helloWorld)

function helloWorld(req, res, next) {
  res.send('hello world')
}

app.listen(3000)
```


## Contributors

* Nick Baugh <niftylettuce@gmail.com>
* Sean Caetano Martin <seancaetanomartin@gmail.com>
* Nicolas Gryman <ngryman@gmail.com>
* Benjamin Tan <demoneaux@gmail.com>


## License

The MIT License

Copyright (c) 2013- HTML5 Boilerplate

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
