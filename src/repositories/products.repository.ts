import { EntityRepository, Repository } from 'typeorm';

import { Products } from '../entities/products.entity';

@EntityRepository(Products)
export class ProductsRepository extends Repository<Products> {
    async findAllProducts() {
        return await this.find();
    }

    async findProductsById(id: number) {
        id = 6;
        return await this.findOne({ productid: id });
    }

    async findProductsByName(name: string) {
        return await this.findOne({ productname: name });
    }

}
