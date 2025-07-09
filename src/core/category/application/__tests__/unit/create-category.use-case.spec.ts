import { CategoryInMemoryRepository } from '../../../infra/db/in-memory/category-in-memory.repository';
import { CreateCategoryUseCase } from '../../create-category.use-case';

describe('CreateCategoryUseCase', () => {
  let useCase: CreateCategoryUseCase;
  let repository: CategoryInMemoryRepository;

  beforeEach(() => {
    repository = new CategoryInMemoryRepository();
    useCase = new CreateCategoryUseCase(repository);
  });

  it('Should create a category', async () => {
    const spyInsert = jest.spyOn(repository, 'insert');
    const output = await useCase.execute({ name: 'test' });
    console.log(output);
    expect(spyInsert).toHaveBeenCalledTimes(1);
    expect(output).toStrictEqual({
      id: repository.items[0].category_id.id,
      name: 'test',
      description: null,
      is_active: true,
      created_at: repository.items[0].created_at,
    });
  });
});
