import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiKeyGuard } from '../auth/api-key.guard';
import { CreatePostDto } from 'src/post/dto/create-post.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UseGuards(ApiKeyGuard)
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @UseGuards(ApiKeyGuard)
  findAll() {
    return this.usersService.findAll();
  }

  @Post(':id/posts')
  @UseGuards(ApiKeyGuard)
  CreatePostByUser(@Param('id') id: string, @Body() createPostDto: CreatePostDto) {
    return this.usersService.createPostsByUser(+id,createPostDto);
  }

  @Get(':id/posts')
  @UseGuards(ApiKeyGuard)
  findPostByUser(@Param('id') id: string) {
    return this.usersService.findPostsByUser(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
