import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './nest-modules/categories-modules/categories.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { DatabaseModule } from './nest-modules/database/database.module';
import { ConfigModule } from './nest-modules/config-module/config.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    CategoriesModule,
    SequelizeModule.forRoot({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      dialect: 'sqlite' as any,
      host: ':memory',
      logging: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
