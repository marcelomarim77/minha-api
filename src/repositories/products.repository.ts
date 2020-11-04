import { EntityRepository, Repository, getConnection } from 'typeorm';

import { Products } from '../entities/products.entity';

@EntityRepository(Products)
export class ProductsRepository extends Repository<Products> {
    async findAllProducts() {
        return await this.find();
    }

    async findProductsById(id: number) {
        return await this.findOne({ productid: id });
    }

    async findProductsByName(name: string) {
//        return await this.find({ productname: name });

        return await getConnection()
            .createQueryBuilder()
            .select("*")
            .from(Products, "products")
            .where("products.productname = :name", { name: name})
//            .getSql();
            .getMany();
    }

}
