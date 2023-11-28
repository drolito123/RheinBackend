import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class logdata{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    mail: string;

    @Column()
    username: string;

    @Column()
    password: string;

    constructor(mail:string,password:string,username:string){
        this.password=password
        this.mail=mail
        this.username=username
    }
}
