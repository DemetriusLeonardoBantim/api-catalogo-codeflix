import { CategoryModel } from '@core/category/infra/db/sequelize/category.model';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

const models = [CategoryModel];

@Module({
  imports: [
    SequelizeModule.forRoot({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      dialect: 'sqlite' as any,
      host: ':memory:',
      logging: false,
      models,
    }),
  ],
})
export class DatabaseModule {}
