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

  import { ProductsService } from './Products.service';
  import { ProductsDTO } from './Products.dto';

  @Controller('products')
  export class ProductsController {
    constructor(private productsService: ProductsService) {}

    @Get()
    async showAllProducts() {
      const products =  await this.productsService.showAll();
      return {
        statusCode: HttpStatus.OK,
        message: 'Products fetched successfully',
        products,
      };
    }

    @Post()
    async createUsers(@Body() data: ProductsDTO) {
       const Product = await this.productsService.create(data);
      return {
        statusCode: HttpStatus.OK,
        message: 'Product created successfully',
        Product,
      };
    }

    @Get(':id')
    async readProduct(@Param('id') id: number) {
      const data =  await this.productsService.read(id);
      return {
        statusCode: HttpStatus.OK,
        message: 'Product fetched successfully',
        data,
      };
    }

    @Patch(':id')
    async uppdateProduct(@Param('id') id: number, @Body() data: Partial<ProductsDTO>) {
      await this.productsService.update(id, data);
      return {
        statusCode: HttpStatus.OK,
        message: 'Product updated successfully',
      };
    }

    @Delete(':id')
    async deleteProduct(@Param('id') id: number) {
      await this.productsService.destroy(id);
      return {
        statusCode: HttpStatus.OK,
        message: 'Product deleted successfully',
      };
    }
  }