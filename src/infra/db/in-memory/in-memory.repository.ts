
import { Entity } from "../../../shared/domain/entity";
import { NotFoundError } from "../../../shared/domain/errors/not-found.error";
import { IRepository } from "../../../shared/domain/repository/repository-interface";
import { ValueObject } from "../../../shared/domain/value-object";

export abstract class InMemoryRepository <E extends Entity, EntityId extends ValueObject> implements IRepository<E, EntityId> {

    items: E[] = []
    async insert(entity: any): Promise<void> {
       this.items.push(entity)
    }

    async bulkInsert(entities: any[]): Promise<void> {
       this.items.push(...entities)
    }

    async update(entity: E): Promise<void> {
        const indexFound = this.items.findIndex((item) => {
            item.entity_id.equals(entity.entity_id)
        }) 
        if(indexFound === -1) {
            throw new NotFoundError(entity.entity_id, this.getEntity())
        }
        this.items[indexFound] = entity
    }

    async delete(entity_id: any): Promise<void> {
        const indexFound = this.items.findIndex((item) => {
            item.entity_id.equals(entity_id)
        })
        if(indexFound === -1) {
            throw new Error("Entity not found")
        }
        this.items.splice(indexFound, 1)
    }

    findById(entity_id: any): Promise<E> {

        return this._get(entity_id)
    }

    async findAll(): Promise<any[]> {
        return this.items
    }

    async _get(entity_id: EntityId){
        const item = this.items.find((item) => item.entity_id.equals(entity_id))
        return typeof item === 'undefined' ? null : item;
    }

    abstract getEntity(): new (...args: any[]) => E;
}
