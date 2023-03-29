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
            <div class="card-footer bg-transparent border-tertiary d-flex justify-content-between">
            <div>
            <div>${tool.name}</div>
            <div>${tool.published_in}</div>
            </div>
            <div><i class="fa fas-arrow-right"></i></div>
            
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

loadTolls();
