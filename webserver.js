'use strict'
var 
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    Koa = require('koa'),
    http = require('http');
const  app = new Koa();

async function timeout(flag){
    if (flag)
        return 'hello world';
    else
        throw 'my god, failure';
}

var p1 = new Promise(function (resolve, reject){
    console.log("new promise");
    var flag = 1;
    function dcl(){
        if (flag === 0){
            console.log("failed");
            reject(flag);
        }else {
            console.log("successed");
            resolve(flag);
        }
    };
    dcl();
console.log("MMP");
});
console.log("I am first ?");
p1.then(flag => {
    console.log("S: flag = " + flag);
});
p1.catch(flag => {
    console.log("F: flag = " + flag);
});


//console.log(timeout(true));
//console.log(timeout(false));
//timeout(true).then(result => {
    //console.log(result);
//});
console.log("I am first 2?");
//app.use(async (ctx, next) => {
    //if (await checkPermission()) 
    //{
        //await next();
    //}else {
        //console.log("Permission Deny!");
    //}
//});

//var checkPermission = async () => {
    //console.log("Checking Permission...");
    //setTimeout(function (){
        //console.log("Allow");
    //}, 3000);
//};
app.listen(8080);


//var rootpath = path.resolve(process.argv[2] || '.');
//console.log('Static root dir :' + rootpath);

//var server = http.createServer(function (request, response){
    //console.log('request : ' + request.method + ':' + request.url);
    //var pathname = url.parse(request.url).pathname;
    //var filepath = path.join(rootpath, pathname);
    //fs.stat(filepath, function (err, stats){
        //if (err)
        //{
            //console.log('response: 404' + request.url);
            //response.writeHead('404');
            //response.end('<h1>404 Not Found</h1>');
        //} else if (stats.isFile()) {
            //console.log('response: 200' + request.url);
            //response.writeHead('200');
            //fs.createReadStream(filepath).pipe(response);
        //} else {
            //console.log('response: 200' + request.url);
            //response.writeHead('200');
            //fs.createReadStream("mainpage.html").pipe(response);
        //}
    //});
//});

//server.listen(8080);
//console.log('Server is running at http://127.0.0.1:8080');
