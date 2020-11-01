import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({
    name: 'products'
})
export class Products {

    @PrimaryGeneratedColumn()
    productid: number;

    @Column()
    productname: string;

    @Column()
    quantity: number;

    @Column()
    price: number;

}
