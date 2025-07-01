import { InvalidUuidError, Uuid } from "../uuid.vo"

const validateSpy = jest.spyOn(Uuid.prototype as any, 'validate')

describe('Uuid Unit Tests', () => {

    test('Should create a valid uuid', () => {
        const uuid = new Uuid()
        expect(validateSpy).toHaveBeenCalledTimes(1)
        expect(uuid.id).toBeDefined(
        )
    })

    test('Should accept a valid uuid', () => {
        const uuid = new Uuid('3f85b4c0-8a6d-4b13-b2f9-6fef0a9a3b92')
        expect(validateSpy).toHaveBeenCalledTimes(2)
        expect(uuid.id).toBe('3f85b4c0-8a6d-4b13-b2f9-6fef0a9a3b92')
    })
})