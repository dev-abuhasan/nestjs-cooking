import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 3000;

  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Nest Js Cooking!')
    .setDescription('The NestJs Cooking API description')
    .setVersion('1.0')
    .addTag('cooking')
    .addBearerAuth()
    .setLicense('MIT', 'https://opensource.org/licenses/MIT')
    .addApiKey({ type: 'apiKey', name: 'x-api-key}', in: 'header' })
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs', app, documentFactory, {
    jsonDocumentUrl: '/docs/json',
    useGlobalPrefix: true,
  });

  console.warn(`Server Running: http://localhost:${port}`);
  console.warn(`Swagger Running: http://localhost:${port}/api/docs`);
  await app.listen(port);
}
bootstrap();
