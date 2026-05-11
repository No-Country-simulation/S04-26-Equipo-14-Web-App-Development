import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const port = process.env.PORT ?? 3000;
  await app.listen(port);

  console.log(` Server running on port ${port}`);
}

bootstrap();

/*
para pruebas manuales de la integración, se puede usar este código para ejecutar el pipeline directamente al iniciar el servidor:
import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PipelineService } from './pipeline/pipeline.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const pipelineService = app.get(PipelineService);
  await pipelineService.executeWeeklyPipeline();

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
*/
