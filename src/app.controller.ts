// tslint:disable

import { Controller, Get, Param, Post } from '@nestjs/common';
import { ExampleService } from './sample/application/ExampleService';

@Controller('examples')
export class AppController {
  constructor(private readonly exampleService: ExampleService) {}

  @Post('')
  async saveExample(): Promise<any> {
    return await this.exampleService.saveExample();
  }

  @Get('/:id')
  async getExample(@Param('id') id: string): Promise<any> {
    const result = await this.exampleService.getExample(id);

    return result;
  }
}
