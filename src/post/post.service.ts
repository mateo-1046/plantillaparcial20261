import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Post } from './entities/post.entity';
import { Comment } from './entities/comment.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostService {
  constructor(
      @InjectRepository(Post)
      private readonly postRepository: Repository<Post>,
      @InjectRepository(Comment)
      private readonly commentRepository: Repository<Comment>,
    ) {}

  async createComment(id:number, createCommentDto: CreateCommentDto) {
    const post = await this.postRepository.findOneBy({id});

    if(!post){
      throw new NotFoundException(`Post with id ${id} not found`);
    }

    const comment = this.commentRepository.create({ ...createCommentDto, post } as any);
      
    return this.commentRepository.save(comment);
  }

  create(createPostDto: CreatePostDto) {
    return 'This action adds a new post';
  }

  findAll() {
    return `This action returns all post`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
