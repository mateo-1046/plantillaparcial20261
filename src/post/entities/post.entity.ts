import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Comment } from "./comment.entity";
import { User } from "src/users/entities/user.entity";

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id!:number;

    @Column()
    caption!:string;

    @Column()
    likes: number = 0;

    @CreateDateColumn()
    createdAt!: Date;

    @OneToMany(() => Comment, (comment) => comment.id   )
    comments!: Comment[];

    @ManyToOne(() => User, (user) => user.id)
    user!: User;
}
