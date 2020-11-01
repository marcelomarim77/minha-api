import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { getEnviroment } from './utils/utils';
import { ProductsRepository } from './repositories/products.repository';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async (): Promise<TypeOrmModuleOptions> => ({
        type: 'postgres',
        host: 'localhost', //getEnviroment('DB_HOST', true),
        username: 'postgres', //getEnviroment('DB_USER', true),
        password: 'Mapego110713@', //getEnviroment('DB_PASS', true),
        database: 'teste', //getEnviroment('DB_NAME', true),
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: false
      })
    }),
    TypeOrmModule.forFeature([
      ProductsRepository
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
