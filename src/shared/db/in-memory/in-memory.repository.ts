import { Entity } from "../../domain/entity";
import { IRepository } from "../../domain/repository/repository-interface";
import { ValueObject } from "../../domain/value-object";

export class InMemoryRepository <E extends Entity, EntityId extends ValueObject> implements IRepository<E, EntityId> {

    items: E[] = []
    async insert(entity: any): Promise<void> {
       this.items.push(entity)
    }
    async bulkInsert(entities: any[]): Promise<void> {
       this.items.push(...entities)
    }
    update(entity: any): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(entity: any): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findById(entity_id: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    async findAll(): Promise<any[]> {
        return this.items
    }
    getEntity(): new (...args: any[]) => any {
        throw new Error("Method not implemented.");
    }

}