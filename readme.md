# ractive-toolkit

Supplies a few helpers for Ractive

[![NPM](https://nodei.co/npm/ractive-toolkit.png)](https://nodei.co/npm/ractive-toolkit/)

## Example

index.js
```js
var Ractive = require('ractive')

require('ractive-toolkit')

... create Ractive ...
```

index.html
```html
<h1> {{relativeDate(last_updated)}} </h1>
<p>  {{prettyBytes(size)}} </p>
```


## Modules

* [pretty-bytes](https://github.com/sindresorhus/pretty-bytes)
* [relative-date](https://github.com/azer/relative-date)

