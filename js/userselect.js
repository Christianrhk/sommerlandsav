var app = new function() {
  this.el = document.getElementById('names');
  this.names = [
    ["Andreas", ["mDFBTdToRmw"], "profil/andreas.jpg", true], // Skibidi
    ["J_n",["eI-THZvxzdI"], "profil/jan.jpg", true], // Alt på Svensk
    ["Oda", ["y6120QOlsfU", "TBElYMDycWk"], "profil/gluten.jpg", true], // Darude Sandstorm + Hvor er du bro?
    ["Harald", ["jvSpwN5aioo"], "profil/harald.jpg", true], // Alt med Magtens korridorer
    ["Frederik V", ["J294A-R1Cjk"], "profil/vejby.jpg", true], // Dancing on my own
    ["Christian Kjær", ["MFBPzmLjEm4"],"profil/christian.jpg", true], // Alt med TopGunn 
    ["Rune", ["Qa_2C15Uh5c"], "profil/rune.jpg", true], // Kinky fætter 
    ["Vindue", ["rY-DY6dUDuA"], "profil/vindue.jpg", true], // Beautiful Morning
    ["Frederik H", ["L_jWHffIx5E"], "profil/hejby.jpg", true], // Smash mouth - All star
    ["Ida", ["jqwyd749KGw"], "profil/ida.jpg", true], //Vodkafjæs :(
    ["Martin", ["wSzcdRz6aso", "moSFlvxnbgk"], "profil/martin.jpg", true], //Alt med Disney
    ["Daniel", ["UNAr5tzZxdk", "Jc2xfYuLWgE"], "profil/daniel.jpg", true], //Witch Doctor + Freak
    ["Lars", ["X-77txuiVXs"], "profil/lars.jpg", true], //Vamas a la pleya og andre remix af denne
    ["Simon", ["fGx6K90TmCI","Fegs-XVKgnM"], "profil/simon.jpg", true], //X gonna give it ya
    ["Jasmin", ["CduA0TULnow", "HMqgVXSvwGo"], "profil/jasmin.jpg", true], //Fireball + Oops I did it again
    ["Christian Rømer", ["8oVndw4gRWQ"],"profil/romer.jpg", true], //Ole Dakøje
    ["Emma", ["YPV8LqSRSDg"], "profil/emma.jpg", true], //Alt med Nik og Jay
    ["Bao", ["wYuPn0CM8Ww"], "profil/bao.jpg", true], //Elskovspony
    ["Rydhof", ["e-ORhEE9VVg?t=6"], "profil/jakob.jpg", true], // 
    ["Geertinger", ["jKbR7u8J5PU"], "profil/geert.jpg", true],
    ["Piilmann", ["Oktjs-HMNIc"], "profil/pille.jpg", true],
    ["Frederiksen", ["0NTDqqnH9Bk"], "profil/frederik.jpg", true],
    ["Marcus", ["VLnWf1sQkjY", "lQlIhraqL7o", "X0DeIqJm4vM", "gAYL5H46QnQ"], "profil/marcus.jpg", true]
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
