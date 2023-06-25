const http = require('http')
const server = http.createServer ((req,res)=>{
    if(req.url==='/'){
        res.end('happy birthday leo messi')
    }
   else if (req.url === '/about')
   {
    res.end('yess!!!!!')
   }
   else 
   {
    res.end(
        `<h1>0oops!!!<h1>
        <a href ="/">back home </a> 
        `
    )
   }
})

server.listen(5000)