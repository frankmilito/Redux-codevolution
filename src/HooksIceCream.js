import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import buyIceCream from './redux/iceCream/iceCreamAction'


function HooksIceCream() {
    const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Number of Ice Cream - {numOfIceCream}</h1>
            <button onClick={() => dispatch(buyIceCream())}>Buy Cake </button>
        </div>
    )
}

export default HooksIceCream