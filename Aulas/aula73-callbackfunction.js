
function rand(min = 500, max = 5000){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}



function f1(){
    setTimeout(function(callback){
        console.log("f1");
        if(callback) callback();
    }, rand())
  
}

function f2(){
    setTimeout(function(callback){
        console.log("f2");
        if(callback) callback();
    }, rand())
}

function f3(){
    setTimeout(function(callback){
        console.log("f3");
        if(callback) callback();
    }, rand())
}



f1(function(){
    f2(function(){
        f3(function(){
            console.log('olá')
        })
    })
})
