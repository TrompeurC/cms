import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export abstract class MYSQLBaseService<T> {
  constructor(protected repository: Repository<T>) {}
  findAll() {
    return this.repository.find();
  }
}
