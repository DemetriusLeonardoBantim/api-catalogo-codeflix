import { Sequelize } from "sequelize-typescript"
import { CategoryModel } from "../category.model"
import { CategorySequelizeRepository } from "../category-sequelize.repository"

describe("CategorySequelizeRepository", async () => {
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
})