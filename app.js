

function loadCustomer(e) {
  //alert("hai")
    const xhr = new XMLHttpRequest();
  
    xhr.open('GET', '/json/index.json ', true);
  
    xhr.onload = function(){
      if(this.status === 200) {
        console.log(this.responseText);
  
        const profile = JSON.parse(this.responseText);
        
        document.getElementById('welcome').innerHTML=`<p>${profile.name}</p>`;
        document.getElementById('customer').innerHTML=`<p>${profile.customer}</p>`;
      }
    }
    //alert("i am here")
    xhr.send();
  }


  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}