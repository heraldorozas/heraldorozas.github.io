async function getData(){
    let resp=await fetch("../data/author.json")
    let data= await resp.json()

    data.articles.sort((a,b)=>{return b.year-a.year})

    return data
}

async function write(){
    let data=await getData()
    let articles=await data.articles

    let listJournals=document.querySelector("#listJournals")
    let listConferences=document.querySelector("#listConferences")

    articles.forEach((article) => {
        let li=document.createElement("li")
        li.classList.add("mb-1")

        let item=document.createElement("a")
        item.setAttribute('href',article.link);
        item.target="_blank"

        let authorsUnderline= article.authors.replace("H Rozas", `<span class="underline">H Rozas</span>`).replace(", ...", ``)
        let text=`${authorsUnderline}. "${article.title}", ${article.publication}.` 
        item.innerHTML=text
        li.append(item)

        article.journal ? listJournals.append(li): listConferences.append(li)

        

    });
}

write()