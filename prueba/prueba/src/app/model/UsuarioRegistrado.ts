
import {Usuario} from "./Usuario";

export class UsuarioRegistrado extends Usuario {
    
    private nombreApellido : String;
    private correo: String;
    private linkPrivado:String;

    public getNombreApellido(): String {
        return this.nombreApellido;
    }

    public setNombreApellido(nombreApellido: String): void {
        this.nombreApellido = nombreApellido;
    }

    public getCorreo(): String {
        return this.correo;
    }

    public setCorreo(correo: String): void {
        this.correo = correo;
    }

    public getLinkPrivado(): String {
        return this.linkPrivado;
    }

    public setLinkPrivado(linkPrivado: String): void {
        this.linkPrivado = linkPrivado;
    }


    constructor (){
        super();
    }


}