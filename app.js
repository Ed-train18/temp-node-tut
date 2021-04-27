const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('Here is the about page')
    }
    res.end(`
        < h1 > Sorry no page found</h1 >
    <a href="/">Home page</a>
    `)

});

server.listen(5000);