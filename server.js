var http = require('http');
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'}); // Su dung html text/html, text/plain
	if (1) {
		res.write('HUNGDH: Hello from Server 1\n');
	} else {
		res.write('HUNGDH: Hello from Server 2\n');
	}
	res.end('<html><body><br><i>Xin chao cac ban!</i></body></html>');
	}).listen(8080, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8080/');
console.log('void: Hello Server\n');