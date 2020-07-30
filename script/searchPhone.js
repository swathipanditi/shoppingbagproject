function check() {
  var a = new XMLHttpRequest();
  var filterPhones = [];
  a.open("GET",'./json/phones.json',true);
  a.onreadystatechange = function() {
    if( this.readyState == 4) {
      if( this.status == 200) {
        let phoneList = eval(this.responseText);
        let searchtext = document.getElementById("search").value;
        for(phone of phoneList){
          if(phone.product.toLowerCase() === searchtext.toLowerCase()) {
            filterPhones.push(phone);
            var html = "<list>";
            for (var i = 0; i < filterPhones.length; i++) {
                html+="<div>"+filterPhones[i].product+"</div>";
                html+="<div>"+filterPhones[i].model+"</div>";
                html+="<div>"+filterPhones[i].color+"</div>";
                html+="<div>"+filterPhones[i].cost+"</div>";
                html+="<div><img src="+filterPhones[i].url+"></img></div>";
               }
            html+="</list>";
            document.getElementById("box").innerHTML = html;
          }
        }
      }
      else alert("HTTP error "+this.status+" "+this.statusText);
    }
  }
  a.send();
}