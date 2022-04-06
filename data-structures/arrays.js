//Creating a constructor
function DVDBOX(name, releaseYear, director){
    this.name = name,
    this.releaseYear = releaseYear,
    this.director = director,
    console.log(`Name of the movie is ${this.name} and releaseYear is ${this.releaseYear} and the director is ${this.director}`);
};

let dvdBox = new Array(5);
dvdBox[0] = new DVDBOX("ram","2018","Steven Spielberg");
dvdBox[1] = new DVDBOX("Kir","2020","2567 Spielberg");
dvdBox[2] = new DVDBOX("shah","2010","Sdirec Spielberg");
dvdBox[3] = new DVDBOX("preshant","2018","Steven noel");
dvdBox[4] = new DVDBOX("uma","2000","Steven director");
