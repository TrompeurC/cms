import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 16, unique: true })
  username: string;

  @Column({ length: 16, nullable: false })
  password: string;

  @Column({ length: 20, nullable: true })
  mobile: string;
  @Column({ length: 100, nullable: true })
  email: string;
  @Column({ default: 1 })
  status: number;
  @Column({ default: false })
  is_super: boolean;
  @Column({ default: 100 })
  sort: number;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_at: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  update_at: Date;
}
