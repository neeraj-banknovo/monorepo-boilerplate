import { DataSource } from 'typeorm';
import { configMethods } from '../common/configurations';

export default new DataSource({
  type: 'postgres',
  migrationsTableName: 'migrations',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: ['database/entities/*.js'],
  migrations: ['database/migrations/*.js'],
  logger: 'debug',
  logging: !!configMethods.isLocalEnv(),
  synchronize: false
});
