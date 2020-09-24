function add5(num1: number, num2 : number){
    
    return num1 + num2;
}

const number5:number = 5;
const number7:number = 2.8;

const result5 = add5(number5, number7)

let list:number[] = [1,2,3]
let list2: Array<number> = [1,2,3]
let persont1 :[string, number] = ['abc', 1]

console.log(persont1)

console.log(result5)



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
   
    createPost()
}
init()
