
const{readFile , writeFileSync} = require('fs')

readFile('./content/subfolder/first.txt','utf8', (err,result)=>{
   if (err)
   {
       console.log(err)
       return
   }
   const first = result
   console.log(first)

   readFile('./content/subfolder/second.txt','utf8',(err,result)=>{
       if(err)
       {
           console.log(err)
           return
       }
       const second = result;
       writeFileSync(
           './content/subfolder/result-async.txt',
           `happy birthday leo messi : ${first}`,
           {flag:'a'}
       )
   })
})