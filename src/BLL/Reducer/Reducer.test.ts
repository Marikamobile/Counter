import {Inc, Reset} from '../Counter-BLL/Counter-actions'
import {Compare, InitStateType, Reducer} from "./reducers";
import {IncMax, IncMin} from "../Setter-BLL/Setter-actions";


let startState: InitStateType
beforeEach(() => {
    startState = {
        minValue: 0,
        maxValue: 5,
        counter: {
            value: 0,
        },
        setter: {
            minValue: 0,
            maxValue: 5,
        },
        error: null
    }
})
describe('counter tests', () => {
    test('value++', () => {
        const endState = Reducer(startState, Inc())
        expect(endState.counter.value).toBe(1)
    })
    test('reset value', () => {
        const endState = Reducer(startState, Reset())
        expect(endState.counter.value).toBe(endState.minValue)
    })
})
describe('setter tests', () => {
    test('min++', () => {
        const endState = Reducer(startState, IncMin(3))
        expect(endState.setter.minValue).toBe(3)
    })
    test('max++', () => {
        const endState = Reducer(startState, IncMax(6))
        expect(endState.setter.maxValue).toBe(6)
    })
})
describe('common tests', () => {
    test('compare', () => {
        const endState = Reducer(startState, Compare(0, 5))
        expect(endState.error).toBe(null)
    })
    test('compare2', () => {
        const endState = Reducer(startState, Compare(-1, 2))
        expect(endState.error).toBe('incorrect value!')
    })
    test('compare3', () => {
        const endState = Reducer(startState, Compare(4, 1))
        expect(endState.error).toBe('incorrect value!')
    })
    test('compare4', () => {
        const endState = Reducer(startState, Compare(1, 10))
        expect(endState.error).toBe('enter values and press \'set\'')
    })

})

