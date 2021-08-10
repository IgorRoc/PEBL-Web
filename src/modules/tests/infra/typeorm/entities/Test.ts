import{ 
    Entity,
    Column, 
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn, 
    ManyToOne,
    JoinColumn
}from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/Users';

@Entity('tests')
class Test{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    user_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column('timestamp with time zone')
    deadline: Date[];

    @Column("int", { array: true })
    subnum: number[];

    @Column("text", { array: true })
    type: string[];

    @Column("int", { array: true })
    block: number[];

    @Column("int", { array: true })
    congruency: number[];

    @Column("int", { array: true })
    trial: number[];

    @Column("int", { array: true })
    stim: number[];

    @Column("text", { array: true })
    resp: string[];

    @Column("int", { array: true })
    corr: number[];

    @Column("text", { array: true })
    rt: string[];

    @Column("int", { array: true })
    tooslow: number[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Test;