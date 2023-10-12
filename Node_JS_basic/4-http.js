const http = require('http')
const port = 1245;
const hostname = '0.0.0.0';

const app = http.createServer((req, res) => {
    res.statusCode = 200;
    res.write('Hello Holberton School!');
    res.end()
})

app.listen(port, () => {
    console.log('...')
})