function a(){
    console.log("test")
}

function b(cb){
    cb()
}

b(()=>{
    console.log("testt")
})