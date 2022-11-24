import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `product ${limit} ${offset} in ${brand}`;
  }

  @Get('filter')
  getProductFilter() {
    return "I'm the filter";
  }

  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }

  @Post()
  create() {
    return {
      message: 'Create action',
    };
  }
}
