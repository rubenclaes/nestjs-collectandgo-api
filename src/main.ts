import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Supermarkets')
    .setDescription(
      'The supermarket API: fetch Collect&Go availabilities from Colruyt supermarkets',
    )
    .setVersion('1.0')
    .addTag('supermarkets')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app
    .listen(3000)
    .then(() => console.info(`Server is running http://localhost:3000/`));
}
bootstrap();
