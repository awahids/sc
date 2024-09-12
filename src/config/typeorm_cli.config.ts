import { DataSource } from 'typeorm'
require('dotenv').config()

const typeormConfig = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: false,
  cache: true,
  migrations: ["dist/database/migrations/*{.ts,.js}"],
  migrationsRun: true,
})

export default typeormConfig;
