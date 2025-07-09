import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    CategoriesModule,
    SequelizeModule.forRoot({
      dialect: 'sqlite' as any,
      host: ':memory',
      logging: false
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
