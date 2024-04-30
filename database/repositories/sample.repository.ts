import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from './base.repository';
import { SampleEntity } from '../entities';

@Injectable()
export class SampleRepository extends BaseRepository<SampleEntity> {
  constructor(@InjectRepository(SampleEntity) private readonly repository: Repository<SampleEntity>) {
    super(repository);
  }
}
