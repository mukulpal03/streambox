import dotenv from "dotenv";

dotenv.config();

const config = {
  PORT: process.env.PORT ?? 3000,
  DB_URL: process.env.DB_URL ?? "",
  JWT_SECRET: process.env.JWT_SECRET ?? "",
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN ?? "",
  NODE_ENV: process.env.NODE_ENV ?? "development",
  MUX_TOKEN_ID: process.env.MUX_TOKEN_ID ?? "",
  MUX_SECRET_KEY: process.env.MUX_SECRET_KEY ?? "",
};

export default config;
