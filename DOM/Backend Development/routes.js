const fs = require('fs');

const requestHandler = ((req, res) =>{
    const url = req.url;
    const method = req.method;
  
    if (url === '/') {
      fs.readFile('message.txt', { encoding: 'utf8' }, (err, data) => {
        if (err) {
          console.log(err);
        }
  
        console.log('Message received: ' + data);
  
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body>');
        res.write(`<p>${data}</p>`);
        res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
        res.write('</body>');
        res.write('</html>');
        res.end(); 
      });
    } else if (url === '/message' && method === 'POST') {
      const body = [];
      req.on('data', (chunk) => {
        console.log(chunk);
        body.push(chunk);
      });
  
      req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
        fs.writeFile('message.txt', message, (err) => {
          if (err) {
            console.log(err);
          }
          res.statusCode = 302;
          res.setHeader('Location', '/');
          res.end();
        });
      });
    } else {
      res.write('<html>');
      res.write('<head><title>My First Page!</title></head>');
      res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
      res.write('</html>');
      res.end();
    }
})

exports.handler = requestHandler;