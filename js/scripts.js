function Telefon(marka, cena, kolor) {
	this.marka = marka;
	this.cena = cena;
	this.kolor = kolor;
};

Telefon.prototype.printInfo = function() {
	console.log("Marka telefonu to "+ this.marka +", kolor to "+ this.kolor +", a cena to "+ this.cena +".");
};

var SamsungGalaxyS6 = new Telefon("Samsung", 2400, "biały");

var iPhone6s = new Telefon("Apple", 2900, "srebrny");
var Huaweip8 = new Telefon("Huawei", 1700, "czarny");


iPhone6s.printInfo();
Huaweip8.printInfo();
SamsungGalaxyS6.printInfo();

