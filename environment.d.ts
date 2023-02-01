declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TELEGRAM_TOKEN: string;
      NODE_ENV?: "dev" | "prod";
      PORT?: number;
    }
  }
}

export {};
