var natural = require('natural');
var nodejieba = require("nodejieba");
var fs = require('fs');
var sw = require('stopword')

var stopwords = require("./words/stop.json");

var text = "既然两个人都是社会底层，那跟“仇恨教育下的阶级斗争的毒”有毛关系啊？本是底层人的小店老板，看顾客是底层人，就加价卖面，这分明是“以经济建设为中心”，连阶级感情都不要了！";
var input = sw.removeStopwords(nodejieba.cut(text), stopwords);

natural.BayesClassifier.load('./model/consc.json', null, function(err, classifier) {
	var x = classifier.getClassifications(input);
    console.log(x)
	console.log(x[0].label,  Math.round((x[0].value/(x[0].value+x[1].value))*10000)/100 + '%');
});