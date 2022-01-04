import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './users/products.module';
import { CartModule } from './users/cart.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'sql6.freemysqlhosting.net',
    port: 3306,
    username: 'sql6463167',
    password: 'ZwxWxzS7iK',
    database: 'sql6463167',
    autoLoadEntities: true,
    synchronize: true,
  }), UsersModule, ProductsModule, CartModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}