var natural = require('natural');
var nodejieba = require("nodejieba");
var fs = require('fs');
var sw = require('stopword')
var stopwords = require("./words/stop.json");
var classifier = new natural.BayesClassifier();


fs.readFile('./data/yishi/mix.txt', function(err, callback){
	var lines = callback.toString().split(/(?:\r\n|\r|\n)/g);
	lines.forEach(function (line) {
		var arr = line.split('||');
		var cleaned = sw.removeStopwords(nodejieba.cut(arr[1]), stopwords);
		if (arr[0] != '') {
			classifier.addDocument(cleaned, arr[0]);
		}
	});
	classifier.train();
	classifier.save('./model/consc.json', function(err, classifier) {
	    // the classifier is saved to the classifier.json file!
		console.log('Saved --> .json');
	});
});

