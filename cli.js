#! /usr/bin/env node
var fs = require('fs')
var removeTrailingCommas = require('./')
var filepath = process.argv[2]

if (filepath){
  var code = fs.readFileSync(filepath) + ''
  code = removeTrailingCommas(code)
  console.log(code)
}else{
}