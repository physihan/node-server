async function a(){
   x=await 1
   y=await 2
   return [x,y]
}
a().then(function(x){
    console.log(x)
})