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
    image!: string;


    @Column()
    onstock!: string;

    constructor(name:string,price:number,image:string,onstock:string){
        this.price=price
        this.name=name
        this.image=image
        this.onstock=onstock
    }
}

