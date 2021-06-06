import React, { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { buyEaring } from './earingAction'

function EaringContainer(props) {
    const [number, setNumber] = useState(1)
    // const numOfEaring = useSelector(state => state.earing.numOfEarings)
    // const dispatch = useDispatch()
    return (
        <div>
            <h2>Num of earings - {props.numOfEarings}</h2>
            <input value={number} type="text" onChange={(e) => setNumber(e.target.value)} />
            <button onClick={() => props.buyEaring(number)}>Buy {number} earings</button>
        </div>
    )
}

// export default EaringContainer
const mapStateToProps = state => {
    return {
        numOfEarings: state.earing.numOfEarings
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyEaring: (number) => dispatch(buyEaring(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EaringContainer)
