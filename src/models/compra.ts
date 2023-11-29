import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Compra {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column() 
  items: string;

  @Column()
  total: number;

  constructor(items: string, total: number) {
    this.items = items
    this.total = total
  }
}