async function getData(){
    let resp=await fetch("../data/author.json")
    return resp
}

let x=getData()
console.log(x)