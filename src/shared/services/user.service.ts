import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MYSQLBaseService } from './mysql-base.service';

@Injectable()
export class UserService extends MYSQLBaseService<User> {
  // @InjectRepository(User)
  // protected userService: Repository<User>;
  constructor(@InjectRepository(User) userService: Repository<User>) {
    super(userService);
  }
  // async findAll() {
  //   const users = this.userService.find();
  //   return {
  //     users,
  //   };
  // }
}
