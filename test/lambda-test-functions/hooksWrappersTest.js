var lambdaExtension = require('../../lib/lambda')
var testModule = require('./testModule')

var options = {
  diy: testModule
}

exports.handler = lambdaExtension.createHandler(options)
