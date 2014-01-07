var falafel = require('falafel')

module.exports= removeTrailingCommas
function removeTrailingCommas(code){
  return falafel(code, function(node){
    if (node.type === 'ArrayExpression'){
      var src = node.source()
      if (src.match(/,\s*\]$/)){
        var lastIdx = src.lastIndexOf(',')
        src = src.substring(0, lastIdx) + src.substring(lastIdx + 1)
        node.update(src)
      }
    }
    if (node.type === 'ObjectExpression'){
      var src = node.source()
      if (src.match(/,\s*\}$/)){
        var lastIdx = src.lastIndexOf(',')
        src = src.substring(0, lastIdx) + src.substring(lastIdx + 1)
        node.update(src)
      }
    }
  })
}