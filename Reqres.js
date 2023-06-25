const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    const url = req.url
    if(url === '/home')
    {
    
    res.write('<html>');
    res.write('<head><title> First page</title><head>')
    res.write('<body><h1> welcome home</h1></body>');
    res.write('</html>');
    res.end();
    }
    if(url === '/about')
   
    {
    res.write('<html>');
    res.write('<head><title> Second  page</title><head>')
    res.write('<body><h1> welcome  to about us page </h1></body>');
    res.write('</html>');
    }
    if(url === '/node')
    
    {
        res.write('<html>');
        res.write('<head><title> Third page</title><head>')
        res.write('<body><h1> welcome  to my Node Js project </h1></body>');
        res.write('</html>');
        }
    
});
server.listen(5004)







