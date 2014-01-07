Remove Trailing Commas
======================

This is a tool to remove trailing commas within array literal and object literal expressions in your Javascripts. Trailing commas are problematic because IE 7 and below treat them differently from newer browsers, in specifically

* For arrays literals, IE 7 appends an extra undefined element at the end of the array, where as other browser do not.
* For object literals, IE 7 fails to parse the script whereas other browser allow it.

## Install

    npm install trailing_comma_remover -g

## Usage

To perform the conversion for all `.js` files within the current directory

    remove_trailing_commas

To perform the conversion for the specified directory

    remove_trailing_commas some_dir

To perform the conversion for a single file

    remove_trailing_commas foobar.js

## Use As a Module

``` js
var removeTrailingCommas = require('remove_trailing_commas');

var code = removeTrailingCommas('[1, 2, 3,]')

console.log(code) // outputs [1, 2, 3]
```
