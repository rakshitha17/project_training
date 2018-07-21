

function loadCustomer(e) {
    const xhr = new XMLHttpRequest();
  
    xhr.open('GET', '/json/index.json', true);
  
    xhr.onload = function(){
      if(this.status === 200) {
        // console.log(this.responseText);
  
        const profile = JSON.parse(this.responseText);
        
        document.getElementById('welcome').innerHTML=`<p>${profile.welcome}</p>`;
        document.getElementById('customer').innerHTML=`<p>${profile.customer}</p>`;
      }
    }
  
    xhr.send();
  }