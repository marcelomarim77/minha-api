import { Injectable, Post } from '@nestjs/common';

import { ProductsRepository } from './repositories/products.repository';

@Injectable()
export class AppService {

  constructor(
    private readonly productsRepository: ProductsRepository
  ) {}

  async getAllProducts() {
    const result = await this.productsRepository.findAllProducts();
    console.log(result);
    return result;
  };

  async getProductsById(id: number) {
    const result = await this.productsRepository.findProductsById(id);
    console.log(result);
    return result;
  };

  async getProductsByName(name: string) {
    const result = await this.productsRepository.findProductsByName(name);
    console.log(result);
    return result;
  };

}
