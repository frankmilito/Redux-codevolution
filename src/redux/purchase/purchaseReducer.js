import { GET_DIAMONDS } from './purchaseType'

const initialState = {
    numOfDiamonds: 0
}
const purchaseReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DIAMONDS:
            return {
                ...state,
                numOfDiamonds: state.numOfDiamonds + 1
            }
        default: return state
    }
}
export default purchaseReducer