var app = new function() {
  this.el = document.getElementById('names');
  this.names = [
    ["Cinna", ["jGflUbPQfW8"],"profil/christian.jpg",true], 
    ["Knud", ["wTCO5tZ7zZ8"], "profil/HAFFE.png",true],
    ["Aupairvers", ["y3Gw3uc2f24"], "profil/bao.jpg",true], 
    ["Fader Bundløs", ["8oVndw4gRWQ"], "profil/AM.jpeg",true],
    ["Hannah", ["9ZrAYxWPN6c"], "profil/anna.jpg",true],
    ["Cockpete", ["siwpn14IE7E"], "profil/frederik.jpeg",true],
    ["Slik'ma'lige", ["lp3SHXoIwBM"], "profil/kevin.jpg",true],
    ["John Beere", ["hbMwvpUG-CE"], "profil/lasse.jpeg",true],
    ["Ted Bundy", ["hAx6mYeC6pY"], "profil/lukas.jpg",true],
    ["FlowerSour", ["WeYsTmIzjkw"], "profil/mads.jpeg",true],
    ["Squirtle", ["HMqgVXSvwGo"], "profil/marie.jpeg",true],
    ["DR. PJUSKEDUSK", ["lQlIhraqL7o"], "profil/peter.jpeg",true],
    ["Donald", ["0NTDqqnH9Bk"], "profil/rolf.jpg",true],
    ["SlidteGitte", ["CtwJvgPJ9xw"], "profil/sallie.jpg",true],
    ["Bundtner", ["OcHdHNbC3jM"], "profil/signe.jpeg",true]
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
