import { Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  home() {
    return 'hello, welcome my server!'
  }

  @Get('/react')
  react(@Res() res: Response) {
    return res.sendFile('index.html', {
      root: 'public'
    })
  }

  @Get(':id')
  getHello(@Param('id') id: string) {
    return { message: this.appService.getHello() + ' ' + `${id}!` };
  }
}
