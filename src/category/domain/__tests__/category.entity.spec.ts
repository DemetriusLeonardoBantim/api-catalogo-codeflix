import { Uuid } from "../../../shared/domain/value-objects/uuid.vo"
import { Category } from "../category.entity"

describe('Category Unit Tests', () => {
    test('Constructor', () => {
        const category = new Category({
            name: 'Movie'
        })

        expect(category.category_id).toBeTruthy()
        expect(category.name).toBe('Movie')
        expect(category.description).toBeNull()
        expect(category.is_active).toBeTruthy()
        expect(category.created_at).toBeInstanceOf(Date)
    })
})
