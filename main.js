// var fs = require('fs');

// fs.writeFileSync('data.txt','Hello world');

// var fs  = require('fs');
// fs.writeFile("data1.txt" ,"Hi" , (err)=>{
// if(err){
//     console.log(err);
// }else{
//     console.log('file is created successfully')
// }
// } );


// var fs = require('fs');
// fs.readFile('data1.txt','utf-8',  (err, data)=>{
// if(err){
//     console.log(err)
// }else{
//     console.log(data);
//     console.log('Welcome to abbottabad');
// }
// });
// console.log(' Hello i am learning Node JS');

// var fs = require('fs');
// fs.appendFile("data.txt" , (err)=>{
//     if(err){
// throw err;
//     }else{
//         console.log('File updated');
//     }
// })

var http = require('http');
http.createServer((req ,res)=>{
res.write('Hello world');
res.end();
}).listen(3000 , () =>{
    console.log('server running on http://localhost:3000')
});
