import { Uuid } from "../../../shared/domain/value-objects/uuid.vo"
import { Category } from "../category.entity"

describe('Category Unit Tests', () => {

    let validateSpy: any;
    beforeEach(() => {
        validateSpy = jest.spyOn(Category, "validate")
    })

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

    describe("create command", () => {
        test("should create a category", () => {
            const category = Category.create({
                name: "Movie"
            })

            expect(category.category_id).toBeInstanceOf(Uuid)
            expect(category.name).toBe("Movie")
            expect(category.description).toBeNull()
            expect(validateSpy).toHaveBeenCalledTimes(1)
        })
    })
})
