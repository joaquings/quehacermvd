const body = document.getElementById('body')
const container = document.getElementById('dataviewer');
let i = 0

API_URL = './activities.json'


fetch(API_URL)
    .then(response => response.json())
    .then(data => {const actList = data.activities;
        for (let i=0; i<actList.length; i++) {
            const paragraph = document.createElement("p");
            paragraph.innerText = actList[i].name;
            //document.body.appendChild(paragraph);
            let div = document.createElement('div')
            div.classList = ('col-md-3')

            div.innerHTML = `<div class='card'><div class='header'><div><span class='title' href='#'>${actList[i].name}</span><p class='name'>${actList[i].place}</p></div><span class='image'></span></div><p class='description'>${actList[i].description}</p><dl class='post-info'><div class='cr'><dt class='dt'>${actList[i].date}</dt><dd class='dd'>Fecha</dd></div><div class='cr'><dt class='dt '><a href='${actList[i].link}'><i class="fa-solid fa-link linkurl grow"></i></a></dt><dd class='dd'></dd></div></dl></ div>`
            //<img src='${actList[i].image}' class='card-img-top' alt='...'>

                

                /* `<div class='card grow' style='width:auto'><div class='card-body'><img src='${actList[i].image}' class='card-img-top' alt='...'><h5 class='card-title highlight-title'>${actList[i].name}</h5><p class='card-text'><i class="fa-solid fa-location-dot"></i> ${actList[i].place}</p><p class='card-text'><i class="fa-regular fa-calendar"></i> ${actList[i].date}</p><a href='${actList[i].link}'><span class='btn btn-price w3-pink'><i class="fa-solid fa-circle-plus"></i> Más información</span></a></div></div>` */

            container.appendChild(div)
            
            
        }
    })
    .catch(error => console.error('Error:', error));

