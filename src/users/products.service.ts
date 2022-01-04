import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProductsEntity } from './Products.entity';
import { ProductsDTO } from './Products.dto';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductsEntity)
        private productsRepository: Repository<ProductsEntity>,
    ) { }

    async showAll() {
        return await this.productsRepository.find();
    }

    async create(data: ProductsDTO) {
        const user = this.productsRepository.create(data);
        await this.productsRepository.save(data);
        return user;
    }

    async findByEmail(email: string): Promise<ProductsDTO> {
        return await this.productsRepository.findOne({
            where: {
                email: email,
            },
        });
    }

    async read(id: number) {
        return await this.productsRepository.findOne({ where: { id: id } });
    }

    async update(id: number, data: Partial<ProductsDTO>) {
        await this.productsRepository.update({ id }, data);
        return await this.productsRepository.findOne({ id });
    }

    async destroy(id: number) {
        await this.productsRepository.delete({ id });
        return { deleted: true };
    }
}