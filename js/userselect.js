var app = new function() {
  this.el = document.getElementById('names');
  this.names = [
    ["CK", ["xr3Bytryl8Y"],"profil/CK.jpg",true], 
    ["LARS", ["xr3Bytryl8Y"], "profil/LARS2.jpg",true],
    ["PEDE", ["xr3Bytryl8Y"], "profil/PEDE.jpg",true], 
    ["THEIS", ["U0cIIbK71_o"], "profil/THEIS.jpg",true],
    ["SAN", ["qtuvP8En0vU"], "profil/SAN.jpg",true],
    ["ALS", ["Qa_2C15Uh5c"], "profil/ALS.jpg",true],
    ["EMIL", ["s---hhpjFqQ"], "profil/EMIL.png",true],
    ["OTTO", ["KHqNvNgtpLU"], "profil/OTTO.jpg",true]
    ];

  this.Count = function() {

    var el   = document.getElementById('counter');
    var name = 'bunder';
    var antalAktive = 0;
    for(var i = 0; i < this.names.length; i++){
      if(this.names[i][3]){
        antalAktive++;
      }
    }
    if (antalAktive != 0) {
      if (antalAktive > 1) {
        name = 'bundere';
      }
      el.innerHTML = antalAktive + ' ' + name ;
    } else {
      el.innerHTML = 'Ingen ' + name;
    }
  };

  this.FetchAll = function() {
    var data = '';
    if (this.names.length > 0) {
      for (i = 0; i < this.names.length; i++) {
        if(!this.names[i][3]){
          data += '<tr>';
          data += '<td>' + this.names[i][0] + '</td>';
          data += '<td><button class="btn btn-danger" onclick="app.Switch(' + i + ')">Inaktiv</button></td>';
          data += '</tr>';
        } else {
          data += '<tr>';
          data += '<td>' + this.names[i][0] + '</td>';
          data += '<td><button class="btn btn-success" onclick="app.Switch(' + i + ')">Aktiv</button></td>';
          data += '</tr>';
        }
      }
    }
    this.Count();
    return this.el.innerHTML = data;
  };

  this.Switch = function (item) {
    this.names[item][3] = !this.names[item][3];
    // Display the new list
    this.FetchAll();
  };

  this.Deselect = function () {
    for(var i = 0; i < this.names.length; i++){
      this.names[i][3] = false;
    }
    // Display the new list
    this.FetchAll();
  };



  this.Start = function () {
    var filtered = this.names.filter(function(value){
      return value[3];
    });
    var data = JSON.stringify(filtered);
    sessionStorage.setItem('customLykkehjul', data);
    window.location.href = "index2.html";
  }

}
app.FetchAll();
