const fs = require('fs');
const process = require('process');

let cat = function(path) {
	try {
		let contents = fs.readFileSync(path, 'utf8');
		console.log(`file contents: ${contents}`);
	} catch (error) {
		console.error(`Error reading ${path}: ${error}`);
		process.exit(1);
	}
};

cat('./one.txt');
cat('./ghoasg.txt');
