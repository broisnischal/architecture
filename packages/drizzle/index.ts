import { resolve } from 'node:path';
import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';

import * as schema from './schema/index';
import type { DrizzleConfig } from 'drizzle-orm';

export const migrateDb = async (url: string) => {
  //   const migrationConnection = postgres(url, { max: 1 });
  //   await migrate(drizzle(migrationConnection), {
  //     migrationsFolder: resolve(__dirname, '.'),
  //   });
};

export { schema };

export * from 'drizzle-orm';
