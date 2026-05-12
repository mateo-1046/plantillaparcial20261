import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./post.entity";

import { User } from "src/users/entities/user.entity";
@Entity()
export class Comment {

    @PrimaryGeneratedColumn()
    id!:number;

    @Column()
    content!:string;

    @Column()
    author: number = 0;


    @CreateDateColumn()
    createdAt!: Date;

    @ManyToOne(() => Post, (post) => post.id)
    post!: Post;
}