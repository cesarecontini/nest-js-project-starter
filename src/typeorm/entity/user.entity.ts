import { Column, Entity, Index, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { MetaData } from './metadata.embeddable';
import { UserRole } from './user.role.entity';

@Entity()
export class User extends MetaData {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ unique: true })
  @Column({ type: 'varchar', length: 254 })
  email: string;

  @Column({ type: 'varchar', length: 50 })
  firstName: string;

  @Column({ type: 'varchar', length: 75 })
  lastName: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({ type: 'int', default: 0 })
  numberOfSuccessfulLogins: number;

  @Column({ type: 'int', default: 0 })
  numberOfpasswordUpdates: number;

  @Column({ type: 'int', default: 0 })
  numberOfFailedLogins: number;

  @ManyToMany(() => UserRole)
  @JoinTable({
    name: 'user_roles_user_role',
    joinColumn: {
      name: 'userId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'userRoleId',
      referencedColumnName: 'id',
    },
  })
  roles: UserRole[];

  @Column({ type: 'varchar', length: 100, default: null })
  private tokenHash: string;

  @Column({ type: 'datetime', nullable: true })
  timeOfLastSuccessfulLogin: Date;

  @Column({ type: 'datetime', nullable: true })
  timeOfLastFailedLogin: Date;

  @Column({ type: 'datetime', nullable: true })
  timeOfLastPasswordUpdate: Date;
}
