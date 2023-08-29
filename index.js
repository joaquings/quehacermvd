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
            let type = 'hola'

            if (actList[i].type === 'food'){
                console.log('entra')
                type = '<i class="fa-solid fa-utensils fa-2x"></i>'
            }
            else if (actList[i].type === 'cultura'){
                console.log('entra')
                type = '<i class="fa-solid fa-masks-theater fa-2x"></i>'
            }
            else if (actList[i].type === 'airelibre'){
                console.log('entra')
                type = '<i class="fa-solid fa-tree fa-2x"></i>'
            }
            else {
                type = ''
            }

            // <i class="fa-solid fa-paw"></i> <i class="fa-solid fa-tree"></i> <i class="fa-solid fa-palette"></i>

            div.innerHTML = `<div class="card grow">
            <img src="./img/sample.png" class="card-img-top" alt="Image" />
            <div class="card-body">
              <h4>${actList[i].name}</h4>
              <p class="card-text">
              <i class="fa-solid fa-location-dot"></i> ${actList[i].place}<br>
              ${actList[i].descriptions}<br>
              <i class="fa-regular fa-calendar"></i> ${actList[i].date}
              </p>
              <div>
                <a href='${actList[i].link}'><button class="btn w3-pink" type="button">+ info</button></a>
                <button class="btn">${type}</button>
              </div>
            </div>
          </div>`
            //<img src='${actList[i].image}' class='card-img-top' alt='...'>

                

                /* `<div class='card grow' style='width:auto'><div class='card-body'><img src='${actList[i].image}' class='card-img-top' alt='...'><h5 class='card-title highlight-title'>${actList[i].name}</h5><p class='card-text'><i class="fa-solid fa-location-dot"></i> ${actList[i].place}</p><p class='card-text'><i class="fa-regular fa-calendar"></i> ${actList[i].date}</p><a href='${actList[i].link}'><span class='btn btn-price w3-pink'><i class="fa-solid fa-circle-plus"></i> Más información</span></a></div></div>` */

            container.appendChild(div)
            
            
        }
    })
    .catch(error => console.error('Error:', error));

