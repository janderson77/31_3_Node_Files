const fs = require('fs');
const process = require('process');
const axios = require('axios');

function output(text, out) {
	if (out) {
		fs.writeFile(out, text, 'utf8', function(err) {
			if (err) {
				console.error(`Couldn't write ${out}: ${err}`);
				process.exit(1);
			}
		});
	} else {
		console.log(text);
	}
}

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

let path;
let out;

if (process.argv[2] === '--out') {
	out = process.argv[3];
	path = process.argv[4];
} else {
	path = process.argv[2];
}

if (path.slice(0, 4) === 'http') {
	webCat(path, out);
} else {
	cat(path, out);
}
