import {IRentElement} from "../types/IRentElement";

export class RentElementDto implements IRentElement {
    public id: number;
    public rentDate: string;
    public serial: number;
    public title: string;
    public userId: number;

    constructor(id: number, rentDate: string, serial: number, title: string, userId: number) {
        this.id = id;
        this.rentDate = rentDate;
        this.serial = serial;
        this.title = title;
        this.userId = userId;
    }
}