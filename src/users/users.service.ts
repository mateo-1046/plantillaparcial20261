import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from 'src/post/dto/create-post.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {

    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }


  findAll() {
    return this.userRepository.find();
  }



  createPostsByUser(id: number, createPostDto: CreatePostDto) {
    const user = this.userRepository.findOne({ where: { id } });

    if(!user){
      return `User with id ${id} not found`;
    }

      const post = this.userRepository.manager.getRepository('Post').create({ ...createPostDto, user: user });
      return this.userRepository.manager.save(post);  
  }

  findPostsByUser(id: number) {
    return this.userRepository.findOne({
      where: { id },
      relations: ['posts'],
    });
  }

  
  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
