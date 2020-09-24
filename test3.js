function createPost(){
    setTimeout(()=>{
        console.log(1)
    },1000)
}



function createPost2(){
    setTimeout(()=>{
        console.log(2)
        
    },2000)
}

async function init(){
    await createPost2()
   
    await createPost()

    createPost3()
}

function createPost3(){
    setTimeout(()=>{
        console.log(3)
        
    },3000)
}

init()