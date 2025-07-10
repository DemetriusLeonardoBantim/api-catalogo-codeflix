/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Transform } from 'class-transformer';
import { GetCategoryOutput } from '@core/category/application/get-category.use-case';

export class CategoryPresenter {
  id: string;
  name: string;
  description: string | null;

  @Transform(({ value }: { value: Date }) => value.toISOString())
  created_at: Date;

  constructor(output: GetCategoryOutput) {
    this.id = output.id;
    this.name = output.name;
    this.description = output.description;
    this.created_at = output.created_at;
  }
}
