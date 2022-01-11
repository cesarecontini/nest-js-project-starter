import { Column, Entity, PrimaryGeneratedColumn, Index } from 'typeorm';
import { MetaData } from './metadata.embeddable';

@Entity()
export class UserRole extends MetaData {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ unique: true })
  @Column({ type: 'varchar', length: 30 })
  roleName: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  description: string;
}
