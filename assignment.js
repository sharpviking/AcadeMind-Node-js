const http = require('http');


const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>assignment 0</title></header>');
        res.write('<body><p>Welcome to Lanes</p></body>');

        res.write('</html>');

        return res.end();


    }
    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>assignment 0</title></header>');
        res.write('<body><ul><li>vander 1</li><li>vander 2 </li></ul></body>');

        res.write('</html>');

        return res.end();

    }
})

server.listen(3000);
