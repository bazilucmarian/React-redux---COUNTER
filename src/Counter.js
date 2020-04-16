import React from 'react';
import {decrease,increase,reset,modal_open} from './actions'
import {connect} from 'react-redux'

function Counter({name,count,increase,decrease,reset}) {
     
 
    return (
      <div className="container">
          <h1>Counter</h1>
          <h2>{name}</h2>
          <p className="counter">{count}</p>
          <div className="buttons">
              <button type="button" className="btn" onClick={decrease}>Decrease</button>
              <button type="button" className="btn" onClick={reset}>Reset</button>
              <button type="button" className="btn" onClick={increase}>Increase</button>
          </div>
      </div>

    ) 
}
const mapStateToProps=({countState:{count,name}})=>{
    return{
        count: count,
        name:name
    }
}
const mapDispatchToProps=(dispatch, ownProps)=>{
   
    return{
        decrease: ()=>dispatch(decrease()),
        increase: ()=>dispatch(increase()),
        reset: ()=>{
        dispatch(reset()) 
        dispatch(modal_open('bravo', "ai apasat reset!"))
    }
      
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Counter);
