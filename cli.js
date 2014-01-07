#! /usr/bin/env node
var fs = require('fs')
var removeTrailingCommas = require('./')
var glob = require('glob')
var path = require('path')
var log = require('npmlog')

var filepath = process.argv[2]

if (filepath){
  var stat = fs.statSync(filepath)
  if (stat.isFile()){
    convertFile(filepath)
  }else if (stat.isDirectory()){
    convertDirectory(filepath)
  }
}else{
  convertDirectory('./')
}

function convertDirectory(dirpath){
  log.info('Converting directory ' + dirpath)
  var files = glob.sync(path.join(dirpath, '**/*.js'))
  files.forEach(function(file){
    if (file.match(/node_modules\//)) return
    convertFile(path.join(dirpath, file))
  })
}

function convertFile(filepath){
  log.info('Converting file ' + filepath)
  var code = fs.readFileSync(filepath) + ''
  try{
    code = removeTrailingCommas(code)
  }catch(e){
    log.warn('Skipped ' + filepath + ' because of ' + e.message)
  }
  fs.writeFileSync(filepath, code)
}