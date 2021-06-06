import { combineReducers } from 'redux'
import cakeReducer from './cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import purchaseReducer from './purchase/purchaseReducer'
import earingReducer from './buyEarings/earingReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    purchaseDiamond: purchaseReducer,
    earing: earingReducer
})

export default rootReducer