import { createEnvConfig, z } from 'envnest';

const envSchema = z.object({
  port: z.string().transform(Number),
});

export const envService: ReturnType<typeof createEnvConfig<typeof envSchema>> =
  createEnvConfig(envSchema);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}
