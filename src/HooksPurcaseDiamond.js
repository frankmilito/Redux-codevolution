import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import getDiamonds from './redux/purchase/purchaseAction'


function HooksPurchaseDiamond() {
    const numOfDiamonds = useSelector(state => state.purchaseDiamond.numOfDiamonds)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Number of Diamond - {numOfDiamonds}</h1>
            <button onClick={() => dispatch(getDiamonds())}>Get Diamonds </button>
        </div>
    )
}

export default HooksPurchaseDiamond