import { BUY_CAKE } from "./cakeTypes";

const initiailState = {
    numOfCakes: 12
}
const cakeReducer = (state = initiailState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 4
        }
        default: return state
    }
}

export default cakeReducer