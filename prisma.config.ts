// Load environment variables from .env.local first, then .env
import { config } from "dotenv";

// Load .env.local (highest priority for local development)
config({ path: ".env.local" });

// Load .env (fallback)
config();

import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env["DATABASE_URL"],
  },
});
