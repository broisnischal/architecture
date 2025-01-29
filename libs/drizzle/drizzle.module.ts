import { Module } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/postgres-js';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { schema } from '../../packages/drizzle/index';

export const DRIZZLE = Symbol('drizzle-connection');

@Module({
  imports: [],
  providers: [
    {
      provide: DRIZZLE,
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const databaseURL = configService.get<string>('DATABASE_URL');
        if (!databaseURL) {
          throw new Error('DATABASE_URL is not set');
        }

        const pool = new Pool({
          connectionString: databaseURL,
          ssl: true,
        });

        // await pool.connect();

        return drizzle(pool, { schema: schema }) as NodePgDatabase<
          typeof schema
        >;
      },
    },
  ],
  exports: [DRIZZLE],
})
export class DrizzleModule {}
