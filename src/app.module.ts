import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataDTO } from './data.dto';
import { HttpModule } from 'nestjs-http-promise';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, DataDTO],
  exports: [AppService]
})
export class AppModule {}
