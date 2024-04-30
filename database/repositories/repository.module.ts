import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import DbTransactionFactory from './transaction.factory';

/* List your Entities here */
import { SampleEntity } from '../entities';

/* List your Repositories here */
import { SampleRepository } from '.';

const repositories = [SampleRepository];

const entities = [SampleEntity];

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([...entities])],
  providers: [...repositories, DbTransactionFactory],
  exports: [...repositories, DbTransactionFactory],
})
export class RepositoryModule {}
