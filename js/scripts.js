function Telefon(marka, cena, kolor, pojemnosc) {
	this.marka = marka;
	this.cena = cena;
	this.kolor = kolor;
	this.pojemnosc = pojemnosc;
};

Telefon.prototype.printInfo = function() {
	console.log("Marka telefonu to "+ this.marka +", kolor to "+ this.kolor +", pojemność to "+ this.pojemnosc +", a cena to "+ this.cena +".");
};

var SamsungGalaxyS6 = new Telefon("Samsung", 2400, "biały", "64GB");

var iPhone6s = new Telefon("Apple", 2900, "srebrny", "128GB");
var Huaweip8 = new Telefon("Huawei", 1700, "czarny", "64GB");


iPhone6s.printInfo();
Huaweip8.printInfo();
SamsungGalaxyS6.printInfo();

