# Natural-Chinese

#Useage
## classifier.js
	````javascript
		fs.readFile('./corpus/test.txt', function(err, callback){
			//...
		});
	````

	* Relace './corpus/test.txt' to your corpus text file.
	* Text content format Example(One sentence per line): 
	
	NEG||some sentences\r\n
	POS||some sentences\r\n
	...
	
## use.js

	````javascript
		var text = "房间很干净温馨，前台服务态度很好，有家的感觉，值得！";
	````


#Contributors
	* Natural Node: https://github.com/NaturalNode/natural
	* Node Jieba  : https://github.com/yanyiwu/nodejieba
