import { Sequelize } from "sequelize-typescript"
import { CategoryModel } from "../category.model"
import { CategorySequelizeRepository } from "../category-sequelize.repository"
import { Uuid } from "../../../../../shared/domain/value-objects/uuid.vo"

describe("CategorySequelizeRepository", () => {
    let repository: CategorySequelizeRepository
    let sequelize

    beforeEach(async () => {
      sequelize = new Sequelize({
            dialect: "sqlite",
            storage: ":memory:",
            models: [CategoryModel],
            logging: false 
        })
        
        await sequelize.sync({ force: true })
        repository = new CategorySequelizeRepository(CategoryModel)
    })

    test('Should insert a new Category', async() => {
        const CategoryModelObj: any = {
            category_id: new Uuid('a5d3e95e-3ac9-4a6f-baf8-8d27d7bb9131').id,
            name: 'teste',
            description: 'description teste',
            is_active: true,
            created_at: new Date()
        }

        await repository.insert(CategoryModelObj)
        console.log(CategoryModelObj)
        // const model = await repository.findById(CategoryModelObj)
    })
})