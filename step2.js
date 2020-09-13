const fs = require('fs');
const process = require('process');
const axios = require('axios');

const cat = function(path) {
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

async function webCat(url) {
	try {
		let res = await axios.get(url);
		console.log(res.data);
	} catch (err) {
		console.error(`Error fetching ${url}: ${err}`);
		process.exit(1);
	}
}

let path = process.argv[2];

if (path.slice(0, 4) === 'http') {
	webCat(path);
} else {
	cat(path);
}
