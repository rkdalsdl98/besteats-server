import { Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  home() {
    return 'hello, welcome my server!'
  }

  @Get(':id')
  getHello(@Param('id') id: string) {
    return { message: this.appService.getHello() + ' ' + `${id}!` };
  }
}
