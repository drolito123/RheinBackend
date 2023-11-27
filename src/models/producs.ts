import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Remera{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    price!: number;

    
    @Column()
    img!: string;

    constructor(name:string,price:number,img:string){
        this.price=price
        this.name=name
        this.img=img
    }
}



