
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
<div class="coverAll">
  <form id="main">
    <center>
      <div class="mb-3" id="searchbar">
        <h2 class="form-label" for="exampleInputPassword1">Welcome dear friend, how are you feeling today?</h2>
        <br>
        <br>
        <div class="form-floating">
          <input type="text" class="form-control" id="prompt" placeholder="Your mood here" style="height: 50px" required></input>
          <label for="floatingTextarea2">Get it off your chest...</label>
        </div>
      </div>
      <div class="container">
      <h4>Rate your mood</h4>
      <h6 id="rangeValue">5</h6>
      
        <div class="centerText">
          <h6>0</h6>
          <input type="range" class="form-range" min="0" max="10" id="moodRange">
          <h6>10</h6>
        </div>
        
      </div>
      <div class="col-md-1">
        <button class="btn btn-dark" id="button">Submit</button>
      </div>
    </center>
  </form>
</div>`;

      list.appendChild(item);
    

  container.appendChild(list);
  container.appendChild(buttonContainer);
 
    buttonContainer.appendChild(button);

    const moodRange = document.getElementById('moodRange');
    const rangeValue = document.getElementById('rangeValue');
    
    moodRange.addEventListener('input', function() {
        rangeValue.textContent = moodRange.value;
    });


    $('#button').on('click', function() {
      
      const prompt = document.getElementById('prompt').value;
      if(!prompt){
        return;
      }
      window.location.hash =`/result/${prompt}`;
      const mood = document.getElementById("moodRange");


      let data = [];
    const storedData = getCookie('logs');
    if (storedData) {
      try {
        // Parse the stored data from the cookie
        data = JSON.parse(storedData);
        // Check if parsed data is an array, if not, initialize data as an empty array
        if (!Array.isArray(data)) {
          data = [];
        }
      } catch (error) {
        // If parsing fails, log the error and initialize data as an empty array
        console.error("Error parsing stored data:", error);
        data = [];
      }
    }
    
    // Push new data into the array
    data.push(`${Date.now()}#${mood.value}`);
    
    // Store the updated array back into a cookie
    setCookie('logs', JSON.stringify(data), 30); // Set the cookie to expire in 30 days
    
   
  });




  
  
  // Function to set a cookie
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }
  
  // Function to get a cookie value by name
  function getCookie(name) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.indexOf(name + "=") === 0) {
        return cookie.substring(name.length + 1, cookie.length);
      }
    }
    return null;
  }
   
   
}


export default { render };