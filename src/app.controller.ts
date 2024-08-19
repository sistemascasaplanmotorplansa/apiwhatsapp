import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { DataDTO } from './data.dto';

@ApiTags('api-Meta')
@Controller('meata')
export class AppController {
  constructor(
    private readonly appService: AppService
  ) {}

  @Post('send-message')
  @UsePipes(new ValidationPipe({transform:true}))
  send(@Body() data: DataDTO): Promise<any> {
    return this.appService.sendMessageByClient(data);
  }
}
