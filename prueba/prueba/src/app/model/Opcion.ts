
export class Opcion {

    private fecha: String;
    private horainicio : String;
    private horafin: String;
    private confirmada: boolean;
    private cantidadrespuestas: number;

    public getFecha(): String {
        return this.fecha;
    }

    public setFecha(fecha: String): void {
        this.fecha = fecha;
    }

    public getHorainicio(): String {
        return this.horainicio;
    }

    public setHorainicio(horainicio: String): void {
        this.horainicio = horainicio;
    }

    public getHorafin(): String {
        return this.horafin;
    }

    public setHorafin(horafin: String): void {
        this.horafin = horafin;
    }

    public isConfirmada(): boolean {
        return this.confirmada;
    }

    public setConfirmada(confirmada: boolean): void {
        this.confirmada = confirmada;
    }

    public getCantidadrespuestas(): number {
        return this.cantidadrespuestas;
    }

    public setCantidadrespuestas(cantidadrespuestas: number): void {
        this.cantidadrespuestas = cantidadrespuestas;
    }


    constructor(){ }
}