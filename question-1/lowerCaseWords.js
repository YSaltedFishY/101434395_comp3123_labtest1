//Question 1
function lowerCaseWords(arr){
    return new Promise((res,rej)=>{
        if(!Array.isArray(arr)){
            return rej("This is not an array");
        }

        try{
            let words = []
            for(let word of arr){
                if(typeof word === 'string'){
                    words.push(word.toLowerCase());
                }
            }
            res(words);
        }catch(error){
            rej(error);
        }
    });
}

const mixedArray = ['PIZZA',10,true,25,false,'Wings'];
console.log(lowerCaseWords(mixedArray))