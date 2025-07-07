import { Sequelize } from "sequelize-typescript"
import { CategoryModel } from "./category.model"


describe('CategoryModel Integration Tests', () => {

    test('Should create a category', async () => {
        const sequelize = new Sequelize({
            dialect: "sqlite",
            storage: ":memory:",
            models: [CategoryModel]
        })

        await sequelize.sync({ force: true })
    
        const teste = CategoryModel.create({
            category_id: 'a5d3e95e-3ac9-4a6f-baf8-8d27d7bb9131',
            name: 'teste',
            description: 'description teste',
            is_active: true,
            created_at: new Date()
        })
        console.log(teste)
    }) 
})