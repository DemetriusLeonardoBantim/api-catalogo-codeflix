/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { UpdateCategoryDto } from './dto/update-category.dto';
import {
  CreateCategoryInput,
  CreateCategoryUseCase,
} from '@core/category/application/create-category.use-case';
import { UpdateCategoryUseCase } from '@core/category/application/update-category.use-case';
import { DeleteCategoryUseCase } from '@core/category/application/delete-category.use-case';
import { GetCategoryUseCase } from '@core/category/application/get-category.use-case';
import { CategoryPresenter } from './categories.presenter';

@Controller('categories')
export class CategoriesController {

  @Inject(CreateCategoryUseCase)
  private createUseCase: CreateCategoryUseCase;

  @Inject(UpdateCategoryUseCase)
  private updateUseCase: UpdateCategoryUseCase;

  @Inject(DeleteCategoryUseCase)
  private deleteUseCase: DeleteCategoryUseCase;

  @Inject(GetCategoryUseCase)
  private getUseCase: GetCategoryUseCase;

  @Post()
  async create(@Body() createCategoryDto: CreateCategoryInput) {
    const output = await this.createUseCase.execute(createCategoryDto);
    return CategoriesController.serialize(output)
  }

  @Get()
  findAll() {}

  @Get(':id')
  findOne(@Param('id') id: string) {}

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCategoryDto: any,
  ) {
    const output = await this.updateUseCase.execute(updateCategoryDto)
    return CategoriesController.serialize(output)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {}

  static serialize(output: any) {
    return new CategoryPresenter(output);
  }
}
