
const list = document.createElement("div");
const buttonContainer = document.createElement("div");
const button = document.createElement("button");



button.type = "button";
button.innerHTML = "Next";
button.className = "btn btn-dark";


list.style = `display: flex`;
list.className = `text-center`; 

    const item = document.createElement("div");

function render() {
const container = document.querySelector("#container");
container.innerHTML = ""; //removes the previous elements


    //item.className = `col text-black mb-3" style="max-width: 18rem;`;
    item.innerHTML = `
<div class="loading">
<div class="center" style="display: flex; width: 100%; height: 100%; justify-content: center; align-items: center; padding: 170px;"><h1>We are finding the best matches for you... <br>Just a second...</h1></div>
</div>`;

    list.appendChild(item);
  

container.appendChild(list);



 
 
}


export default { render };