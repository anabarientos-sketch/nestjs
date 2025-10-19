import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);

  // Enable CORS for API access
  app.enableCors();

  // Render sets PORT automatically — use it or default to 3000 locally
  const port = process.env.PORT || 3000;

  // Bind to all network interfaces (required by Render)
  await app.listen(port, '0.0.0.0');

  console.log(`✅ Server is running on http://0.0.0.0:${port}`);
}

bootstrap();