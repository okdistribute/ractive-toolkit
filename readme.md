# ractive-toolkit

Supplies a few helpers for Ractive

## Example

index.js
```js
var Ractive = require('ractive-toolkit')

... create new Ractive ...
```

index.html
```html
<h1> {{relativeDate(last_updated)}} </h1>
<p>  {{prettyBytes(size)}} </p>
```


## Modules

* [pretty-bytes](https://github.com/sindresorhus/pretty-bytes)
* [relative-date](https://github.com/azer/relative-date)
