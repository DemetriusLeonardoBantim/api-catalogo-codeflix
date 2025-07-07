import {Op, literal } from 'sequelize'
import { SortDirection } from "../../../../shared/domain/repository/search-params";
import { ICategoryRepository } from "../../../domain/category.repository";
import { CategoryModel } from './category.model';
import { Category } from '../../../domain/category.entity';
import { Uuid } from '../../../../shared/domain/value-objects/uuid.vo';

export class CategorySequelizeRepository implements ICategoryRepository {
    sortableFields: string[] = ['name', 'created_at'];
    orderBy = {
        mysql: {
        name: (sort_dir: SortDirection) => literal(`binary name ${sort_dir}`),
        },
    };

    constructor(private categoryModel: typeof CategoryModel) {}

    async insert(entity: Category): Promise<void> {
        await this.categoryModel.create({
            id: entity.category_id.id,
            name: entity.name,
            description: entity.is_active,
            is_active: entity.is_active,
            created_at: entity.created_at
        })
    }

    async bulkInsert(entities: Category[]): Promise<void> {
        await this.categoryModel.bulkCreate(
            entities.map((entity) => ({
                category_id: entity.category_id.id,
                name: entity.name,
                description: entity.description,
                is_active: entity.is_active,
                created_at: entity.created_at
            }))
        )
    }

    update(entity: Category): Promise<void> {
        throw new Error('Method not implemented.')
    }

    delete(entity_id: Uuid): Promise<void> {
        throw new Error('Method not implemented.')
    }
    
    async findAll(): Promise<Category[]> {
        const models = await this.categoryModel.findAll()
        return models.map((model) => {
            return new Category({
                category_id: new Uuid(model.category_id),
                name: model.name,
                description: model.description,
                is_active: model.is_active,
                created_at: model.created_at
            })
        })
    
    }

    findById(entity_id: Uuid): Promise<Category> {
        throw new Error('Method not implemented.')    
    }

    getEntity(): new (...args: any[]) => Category {
        throw new Error('Method not implemented.')
    }
}