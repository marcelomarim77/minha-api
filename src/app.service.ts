import { Injectable, Post } from '@nestjs/common';

import { ProductsRepository } from './repositories/products.repository';

@Injectable()
export class AppService {

  constructor(
    private readonly productsRepository: ProductsRepository
  ) {}

  async getAllProducts() {
    const result = await this.productsRepository.findAllProducts();
    return result;
  };

  async getProductsById(id: number) {
    const result = await this.productsRepository.findProductsById(id);
    return result;
  };

  async getProductsByName(name: string) {
    const result = await this.productsRepository.findProductsByName(name);
    return result;
  };

}
