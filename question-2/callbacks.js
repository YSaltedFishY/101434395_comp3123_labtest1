//Question 2
function resolvedPromise(){
    return new Promise((res)=>{
            setTimeout(() =>{
                let success = {'message': 'delayed success!'}
                //console.log(success);
                res(success);
            },500)     
    });
}

function rejectedPromise(){
    return new Promise((_,rej)=>{
            setTimeout(() =>{
                try{
                    throw new Error('error: delayed exception!');
                }catch(e){
                    //console.error(e);
                    rej(e);
                }
            },500) 
    });
}


resolvedPromise()
.then((message)=>{
    console.log(message)
})
.catch((error)=>{
    console.error(error)
});

rejectedPromise()
.then((message)=>{
    console.log(message)
})
.catch((error)=>{
    console.error(error.message)
});