const loadTolls = () => {
  const spin = document.getElementById("show-spin");
  spin.classList.remove("d-none");
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((res) => res.json())
    .then((data) => showTools(data.data.tools.splice(0, 6)));
};

const showTools = (data) => {
  const spin = document.getElementById("show-spin");
  spin.classList.add("d-none");
  const toolContainer = document.getElementById("show-tool");
  toolContainer.innerHTML = "";
  data.forEach((tool) => {
    console.log(tool);
    const toolDiv = document.createElement("div");
    toolDiv.classList.add("col");
    toolDiv.innerHTML = `
    
       
          <div class="card h-100">
            <img src="${tool.image}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">features
              </h5>
             
              <p class="card-title"> <ol><li>${tool.features[0]}</li><li>${tool.features[1]}</li><li>${tool.features[2]}</li></ol></p>
              
              
            
            </div>
            <div class="card-footer bg-transparent border-tertiary d-flex justify-content-between align-items-center">
            <div>
            <div><h4>${tool.name}</h4></div>
            <div class="d-flex align-items-center gap-2">
            <i class="fas fa-calendar m-0 p-0"></i>
            <p class="m-0 p-0">${tool.published_in}</p>
            </div>
            </div>
            <div><i class="fas fa-arrow-right text-danger" onclick="fetchSingleDetails('${tool.id}')" data-bs-toggle="modal"
            data-bs-target="#exampleModal"></i></div>
            
            </div>
          </div>
       
        
        
       
      `;
    toolContainer.appendChild(toolDiv);
  });
};

const showMore = () => {
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((res) => res.json())
    .then((data) => showTools(data.data.tools));
};

const fetchSingleDetails = (id) => {
  const URL = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => showSingleDetails(data.data));
};

const showSingleDetails = (data) => {
  console.log(data);
  document.getElementById("show-single-details").innerHTML = `
  <div class="row row-cols-1 row-cols-md-2 g-4" >
  <div class="col">

  <div class="card h-75 w-100">
  <h4>${data.description}</h4>
 
  <div class="card-body">
    <h5 class="card-title">features
    </h5>
   
    <p class="card-title"> <ol><li>${data.features[0]}</li><li>${data.features[1]}</li><li>${data.features[2]}</li></ol></p>
    
    
  
  </div>
  <div class="card-footer bg-transparent border-tertiary d-flex justify-content-between align-items-center">
  <div>
  <div><h4>${data.name}</h4></div>
  <div class="d-flex align-items-center gap-2">
  <i class="fas fa-calendar m-0 p-0"></i>
  <p class="m-0 p-0">${data.published_in}</p>
  </div>
  </div>
  <div><i class="fas fa-arrow-right text-danger"></i></div>
  
  </div>
</div>
 
  </div>
  

  <div class="col">
  <div class="card h-75 w-100">
  <img src="${data.image_link[0]}" class="card-img-top" alt="..." />
 
  <div class="card-body">
    <h5 class="card-title">features
    </h5>
   
    <p class="card-title"> <ol><li>${data.features[0]}</li><li>${data.features[1]}</li></ol></p>
    
    
  
  </div>
  <div class="card-footer bg-transparent border-tertiary d-flex justify-content-between align-items-center">
  <div>
  <div><h4>${data.name}</h4></div>
  <div class="d-flex align-items-center gap-2">
  <i class="fas fa-calendar m-0 p-0"></i>
  <p class="m-0 p-0">${data.published_in}</p>
  </div>
  </div>
  <div><i class="fas fa-arrow-right text-danger"></i></div>
  
  </div>
</div>

  </div>
  
  </div>`;
};

loadTolls();
