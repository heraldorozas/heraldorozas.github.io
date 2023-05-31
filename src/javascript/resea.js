async function getData(){
    let resp=await fetch("./src/data/research.json")
    let data= await resp.json()

    return data
}

async function write(){
    let data=await getData()
    let areas=await data.areas

    let gridAreas=document.querySelector("#areas")

    areas.forEach((area) => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card w-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-3 rounded-xl border-l-sky-900';

        const gridDiv = document.createElement('div');
        gridDiv.className = 'grid lg:grid-cols-3 grid-cols-1 gap-4 ';

        const col1Div = document.createElement('div');
        col1Div.className = 'col-span-1';

        const image = document.createElement('img');
        image.className = 'w-full object-cover rounded-lg';
        image.src = area.image;
        col1Div.appendChild(image);

        const col2Div = document.createElement('div');
        col2Div.className = 'col-span-2';

        const title = document.createElement('h5');
        title.className = 'card-title mb-2 text-xl font-medium leading-tight text-sky-900';
        title.textContent = area.title;
        col2Div.appendChild(title);
        

        const text = document.createElement('p');
        text.className = 'card-text mb-4 text-base text-gray-600 text-justify';
        text.textContent = area.content;
        col2Div.appendChild(text);

        gridDiv.appendChild(col1Div);
        gridDiv.appendChild(col2Div);
        cardDiv.appendChild(gridDiv);

        gridAreas.append(cardDiv)


        

    });
}

write()

/*
<div class="card w-full shadow-lg p-3 rounded-xl border-l-sky-900">
          <div class="grid grid-cols-3 gap-4">
            <div class="col-span-1">
              <img class="w-full  object-cover rounded-lg" src="../img/reserch/joint.PNG" alt="">
            </div>
            <div class="col-span-2">
              <h5 class="card-title mb-2 text-xl font-medium leading-tight text-gray-800">Card title</h5>
              <p class="card-text mb-4 text-base text-gray-600">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
</div>
*/