import { CategoryInMemoryRepository } from "../../../infra/db/in-memory/category-in-memory.repository"; 
import { CreateCategoryUseCase } from "../../create-category.use-case";

describe('CreateCategoryUseCase', () => {
    let useCase: CreateCategoryUseCase
    let repository: CategoryInMemoryRepository;

    beforeEach(() => {
        repository = new CategoryInMemoryRepository()
        useCase = new CreateCategoryUseCase(repository)
    })

    it('Should create a category' , async () => {
        const spyInsert = jest.spyOn(repository, 'insert')
        let output = await useCase.execute({name: 'test'})
        
        expect(spyInsert).toHaveBeenCalledTimes(1)
    })
})