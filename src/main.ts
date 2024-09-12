import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;

  app.enableVersioning({
    type: VersioningType.URI,
  });

  const server = await app.listen(port);
  const address = await server.address();
  console.log(`Application is running on: ${address.address}:${address.port}`);
  server.setTimeout(1800000)
}
bootstrap();
