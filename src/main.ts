// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import * as express from 'express';
import * as listEndpoints from 'express-list-endpoints';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const server = app.getHttpAdapter().getInstance();
  
  await app.init();
  
  console.log(listEndpoints(server as express.Application));
  
  await app.listen(3000);
}
bootstrap();