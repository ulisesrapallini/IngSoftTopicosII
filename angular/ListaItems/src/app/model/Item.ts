export class Item {

	name: String;
	creationDate:number
	items : Item[]; // agrego la lista de Items
	constructor(name: String){
		this.name = name;
		this.creationDate=Date.now();
		// inicializo los Items a visualizar
		this.items = [
					   new Item('Comprar SSD'),
					   new Item('Comprar GPU'),
					   new Item('Alquilar Pelicula')
					];
	}

}
