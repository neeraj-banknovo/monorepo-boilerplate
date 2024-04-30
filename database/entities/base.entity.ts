import { Field, ID, ObjectType } from '@nestjs/graphql';
import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType({ isAbstract: true })
export class BaseEntity {
  @Field(() => ID, { description: 'Id' })
  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Field(() => Date, { description: 'Created at timestamp' })
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
    createdAt: Date;

  @Field(() => Date, { description: 'Updated at timestamp' })
  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
    updatedAt: Date;
}
