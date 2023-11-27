import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class logdata{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    mail!: string;

    @Column()
    password!: string;

    constructor(mail:string,password:string){
        this.password=password
        this.mail=mail
    }
}
