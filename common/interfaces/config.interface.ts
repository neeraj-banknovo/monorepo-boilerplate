export interface AppConfig {
  env: string;
  name: string;
  port: number;
}

export interface DbConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  logging: boolean;
}
