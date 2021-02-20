
import {Opcion} from "./Opcion";
import {Usuario} from "./Usuario";

export class Meet {

	private name: String;
    private descript: String;
	private creationDate:String;
    private publiclink: String;
	private OpcionesDisponibilidad : Opcion;
    private create: Usuario;

    public getName(): String {
        return this.name;
    }

    public setName(name: String): void {
        this.name = name;
    }

    public getDescript(): String {
        return this.descript;
    }

    public setDescript(descript: String): void {
        this.descript = descript;
    }

    public getCreationDate(): String {
        return this.creationDate;
    }

    public setCreationDate(creationDate: String): void {
        this.creationDate = creationDate;
    }

    public getPubliclink(): String {
        return this.publiclink;
    }

    public setPubliclink(publiclink: String): void {
        this.publiclink = publiclink;
    }

    public getOpcionesDisponibilidad(): Opcion {
        return this.OpcionesDisponibilidad;
    }

    public setOpcionesDisponibilidad(OpcionesDisponibilidad: Opcion): void {
        this.OpcionesDisponibilidad = OpcionesDisponibilidad;
    }

    public getCreate(): Usuario {
        return this.create;
    }

    public setCreate(create: Usuario): void {
        this.create = create;
    }


    constructor(){
        this.creationDate = Date.toString();
    }

}
