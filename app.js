const Koa = require('koa');
const app = new Koa();
const fs = require('fs')
  // x-response-time

// app.use(async (ctx, next) => {
//   const start = Date.now();
//   await next();
//   const ms = Date.now() - start;
//   ctx.set('X-Response-Time', `${ms}ms`);
// });

// // logger

// app.use(async (ctx, next) => {
//   const start = Date.now();
//   await next();
//   const ms = Date.now() - start;
//   console.log(`${ctx.method} ${ctx.url} - ${ms}`);
// });

// response

app.use(async(ctx, next) => {
  //   ctx.body = 'Hello World';
  //   //   console.log(ctx)
  //   ctx.response.body = "sasaafs"
//   console.log(ctx.request.href)
    //   ctx.redirect('/1', '/index.html');
    
  var data=await new Promise((resolve,reject)=>fs.readFile('./index.html', 'utf-8', (err, fd) => {
    if (err) {
      if (err.code === 'ENOENT') {
        console.error('myfile does not exist');
        return;
      }

      throw err;
    }
    resolve(fd)

// data=fd
    // ctx.response.body = fd
    // console.log(ctx)
    //  ctx.res.end(fd,'binary')
    
  }));
     ctx.res.end(data)
    // console.log(ctx)
     
 
});

app.use(async ctx => {
  console.log(11221)
});
app.listen(3000);