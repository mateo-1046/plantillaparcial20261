import { Post } from "src/post/entities/post.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id!:number;

    @Column()
    username!: string;
    
    @Column()
    bio!: string;

    @Column()
    followers: number = 0;

    @CreateDateColumn()
    createdAt!: Date;

    @OneToMany(() => Post, (post) => post.id)
    posts!: Post[];
}


