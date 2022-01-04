import {
    Controller,
    Get,
    Post,
    Patch,
    Delete,
    Body,
    Param,
    HttpStatus,
  } from '@nestjs/common';

  import { CartService } from './Cart.service';
  import { CartDTO } from './Cart.dto';

  @Controller('Cart')
  export class CartController {
    constructor(private cartService: CartService) {}

    @Get()
    async showAllProducts(@Param('id') id: number) {
      const cart =  await this.cartService.showAll(id);
      return {
        statusCode: HttpStatus.OK,
        message: 'Cart fetched successfully',
        cart,
      };
    }

    @Post()
    async createUsers(@Body() data: CartDTO) {
       const cart = await this.cartService.create(data);
      return {
        statusCode: HttpStatus.OK,
        message: 'Cart created successfully',
        cart,
      };
    }

    @Get(':id')
    async readProduct(@Param('id') id: number) {
      const data =  await this.cartService.read(id);
      return {
        statusCode: HttpStatus.OK,
        message: 'Cart fetched successfully',
        data,
      };
    }

    @Patch(':id')
    async uppdateProduct(@Param('id') id: number, @Body() data: Partial<CartDTO>) {
      await this.cartService.update(id, data);
      return {
        statusCode: HttpStatus.OK,
        message: 'Cart updated successfully',
      };
    }

    @Delete(':id')
    async deleteProduct(@Param('id') id: number) {
      await this.cartService.destroy(id);
      return {
        statusCode: HttpStatus.OK,
        message: 'Cart deleted successfully',
      };
    }
  }