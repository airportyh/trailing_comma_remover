Remove Trailing Commas
======================

This is a tool to remove trailing commas within array literal and object literal expressions in your Javascripts.

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
