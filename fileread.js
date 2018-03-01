const fs = require('fs');
fs.readFile('readMe.txt', 'utf8', function(err,data){
	fs.writeFile('writeMe.txt', data);
});
/*fs.writeFileSync('writeMe.txt', readFile);
console.log(readFile);*/