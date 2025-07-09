import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { getModelToken, SequelizeModule } from '@nestjs/sequelize';
import { CategoryModel } from '@core/category/infra/db/sequelize/category.model';
import { CategorySequelizeRepository } from '@core/category/infra/db/sequelize/category-sequelize.repository';

@Module({
  imports: [SequelizeModule.forFeature([CategoryModel])],
  controllers: [CategoriesController],
  providers: [
    {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      provide: CategorySequelizeRepository,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return
      useFactory: (categoryModel: typeof CategoryModel) =>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return
        new CategorySequelizeRepository(categoryModel),
      inject: [getModelToken(CategoryModel)],
    },
  ],
})
export class CategoriesModule {}
