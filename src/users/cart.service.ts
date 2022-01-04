import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CartEntity } from './Cart.entity';
import { CartDTO } from './Cart.dto';

@Injectable()
export class CartService {
    constructor(
        @InjectRepository(CartEntity)
        private cartRepository: Repository<CartEntity>,
    ) { }

    async showAll(id: any) {
        return await this.cartRepository.findByIds(id);
    }

    async create(data: CartDTO) {
        const user = this.cartRepository.create(data);
        await this.cartRepository.save(data);
        return user;
    }

    async read(id: number) {
        return await this.cartRepository.findOne({ where: { id: id } });
    }

    async update(id: number, data: Partial<CartDTO>) {
        await this.cartRepository.update({ id }, data);
        return await this.cartRepository.findOne({ id });
    }

    async destroy(id: number) {
        await this.cartRepository.delete({ id });
        return { deleted: true };
    }
}