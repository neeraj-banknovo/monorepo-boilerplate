import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

const tableName = 'accounts';

@Entity({ name: tableName })
export class SampleEntity extends BaseEntity {
  @Column('uuid', { name: 'business_id' })
    businessId: string;

  @Column('numeric', { name: 'column_name', nullable: true })
    columnName: number;

  @Column('jsonb', { nullable: true })
    meta: Record<string, any>;
}
