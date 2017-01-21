var natural = require('natural');
var nodejieba = require("nodejieba");
var fs = require('fs');
var sw = require('stopword')

var stopwords = require("./words/stop.json");

var text = "房间很干净温馨，前台服务态度很好，有家的感觉，值得！";
var input = sw.removeStopwords(nodejieba.cut(text), stopwords);

natural.BayesClassifier.load('./model/2000.json', null, function(err, classifier) {
	var x = classifier.getClassifications(input);
    console.log(x)
	console.log(x[0].label,  Math.round((x[0].value/(x[0].value+x[1].value))*10000)/100 + '%');
});