// app.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('top')
  getTop() {
    return { message: 'This is the top page' };
  }

  @Get('about')
  getAbout() {
    return { message: 'This is the about page' };
  }
}