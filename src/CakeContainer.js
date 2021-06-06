import React from 'react'
import { connect } from 'react-redux'
import buyCake from './redux/cakeAction'

function CakeContainer(props) {
    return (
        <div>
            <h1>Number Of Cakes - {props.numOfCake}</h1>
            <button onClick={props.buyCake}>Buy cakes</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCake: state.numOfCakes
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
