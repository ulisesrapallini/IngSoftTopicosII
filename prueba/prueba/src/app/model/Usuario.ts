
import {Opcion} from "./Opcion";

export class Usuario {

    private username : String;
    private Opcionesseleccionadas : Opcion[];

    public getUsername(): String {
        return this.username;
    }

    public setUsername(username: String): void {
        this.username = username;
    }

    public getOpcionesseleccionadas(): Opcion[] {
        return this.Opcionesseleccionadas;
    }

    public setOpcionesseleccionadas(Opcionesseleccionadas: Opcion[]): void {
        this.Opcionesseleccionadas = Opcionesseleccionadas;
    }


    constructor(){

    }
}