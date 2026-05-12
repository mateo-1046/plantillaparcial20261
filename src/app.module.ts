import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MetricsModule } from './metrics/metrics.module';
import { UsersModule } from './users/users.module';
import { PostModule } from './post/post.module';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'instagram.db',
      entities:[User],
      synchronize: true,
      autoLoadEntities:true,
    }),
    
    AuthModule, MetricsModule, UsersModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
