import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAllProducts() {
    return this.appService.getAllProducts();
  }

  @Get('/:productid')
  async getProductsById(productid: number) {
    return this.appService.getProductsById(productid);
  }

  @Get('/:productname')
  async getProductsByName(productname: string) {
    return this.appService.getProductsByName(productname);
  }

}
