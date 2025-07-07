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

    bulkInsert(entities: Category[]): Promise<void> {
            const modelsProps = entities.map((entity) =>
      CategoryModelMapper.toModel(entity).toJSON(),
    );
    await this.categoryModel.bulkCreate(modelsProps);
    }

    update(entity: Category): Promise<void> {
        
    }

    delete(entity_id: Uuid): Promise<void> {
        
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


}