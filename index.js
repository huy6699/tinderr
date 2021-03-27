var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
    var url = request.url;

    if (url == '/') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('index.html', function(error, data) {
            if (error == null) {
                response.write(data);
                response.end();
            } else {
                response.end(error);
            }
        });
    } else if (url == '/login') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('Login.html', function(error, data) {
            if (error == null) {
                response.write(data);
                response.end();
            } else {
                response.end(error);
            }
        });
    } else if (url == '/Signup') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('Signup.html', function(error, data) {
            if (error == null) {
                response.write(data);
                response.end();
            } else {
                response.end(error);
            }
        });

    } else if (url == '/profile') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('profile.html', function(error, data) {
            if (error == null) {
                response.write(data);
                response.end();
            } else {
                response.end(error);
            }
        });

    } else if (url == '/editInfor') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('index.html', function(error, data) {
            if (error == null) {
                response.write(data);
                response.end();
            } else {
                response.end(error);
            }
        });

    } else {
        response.end('404 Not Found');
    }
}).listen( process.env.port || 3006);