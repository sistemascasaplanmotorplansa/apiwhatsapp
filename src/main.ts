import { ConfigModule } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  ConfigModule.forRoot();
  const app = await NestFactory.create(AppModule, { cors:true});
  app.setGlobalPrefix('api/')
  const options = new DocumentBuilder()
    .setTitle('Send Messages Whatsapp')
    .setDescription('Send notification via whatsapp')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/', app, document);
  // the next two lines did the trick
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
  app.enableCors();
  
  await app.listen(process.env.PORT_APP);
}

bootstrap();