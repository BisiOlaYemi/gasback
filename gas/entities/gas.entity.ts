import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Gas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  gasSize: string;

  @Column()
  refillDate: Date;

  @Column()
  userEmail: string;
}

export interface GasInterface {
  id: number;
  gasSize: string;
  refillDate: Date;
  userEmail: string;
}
