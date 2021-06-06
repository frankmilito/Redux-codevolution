import { BUY_EARINGS } from './earingTypes'

const initialState = {
    numOfEarings: 5
}
const earingReducer = (state = initialState, action) => {
    switch (action.types) {
        case BUY_EARINGS:
            return {
                ...state,
                numOfEarings: state.numOfEarings - action.payload
            }
        default: return state
    }
}
export default earingReducer