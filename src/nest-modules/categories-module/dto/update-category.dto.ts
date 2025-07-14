import { OmitType } from '@nestjs/mapped-types';

export class UpdateCategoryInpuitWithoutId extends OmitType(
  UpdateCategoryInput,
  ['id'] as const,
) {}

export class UpdateCategoryDto extends UpdateCategoryInpuitWithoutId {}

// Criar os arquivos de UseCase