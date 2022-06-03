import React from 'react'
import {connect} from 'react-redux'
import {buycake} from '../redux'

function CakeContainer(props) {
  return (
    <div>
        <h1>number of cake - {props.numOfCake}</h1>
        <button onClick={props.buycake}>Buycake</button>
    </div>
  )
}

const mapStateToProps=state =>{
    return{
        numOfCake: state.numOfCake
    }
}

const mapDispatchToProps= dispatch =>{
    return{
        buycake:()=> dispatch(buycake())
    }
}




export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)