import { Controller, Param, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAllProducts() {
    return this.appService.getAllProducts();
  }

  @Get('/id/:id')
  async getProductsById(@Param('id') id: number) {
    return this.appService.getProductsById(id);
  }

  @Get('/name/:name')
  async getProductsByName(@Param('name') name: string) {
    return this.appService.getProductsByName(name);
  }

}
