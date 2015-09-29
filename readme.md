# ractive-toolkit

Supplies a few helpers for Ractive

## Example

index.js
```js
var Ractive = require('ractive-toolkit')

... create new Ractive ...
```

## Template Helpers

### Humanizing dates and bytes
```html
<h1> {{relativeDate(last_updated)}} </h1>
<p>  {{prettyBytes(size)}} </p>
```

### Filtering

If the items are strings, simply pass the object in question to filter and the searchTerm to filter.

```
<input name="search" type="text" value="{{searchTerm}}"/>
{{#items}}
   {{#if filter(this, searchTerm) }}
     <div>{{this}}</div>
   {{/if}}
{{/items}}
```

If the items are objects, you need to provide the subkeys to filter by:

```
<input name="search" type="text" value="{{searchTerm}}"/>
{{#items}}
  {{#if filter(this, searchTerm, ['name', 'description']) }}
    <div>{{this.name}}</div>
  {{/if}}
{{/items}}
```



## Modules

* [pretty-bytes](https://github.com/sindresorhus/pretty-bytes)
* [relative-date](https://github.com/azer/relative-date)

