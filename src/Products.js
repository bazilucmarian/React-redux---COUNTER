import React, {useEffect} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getProduct} from './actions'

function Products({getProduct, loading,products}) {
  
       
        useEffect(() => {
            getProduct()
        }, [getProduct]);

        if(loading){
        return <h2 className="section-title">Loading...</h2>
    }
    return (
        <section className="section">
            <h2 className="section-title">Our products</h2>
            <ul className="products">
                {products.map(item=>{
                    return <li key={item.id} className="product">
                    <img src={item.image.url} alt={item.title}/>
                    <h4>{item.title}</h4>
                    </li>
                })}
            </ul>
        </section>
    )
}
Products.propTypes={
    loading:PropTypes.bool.isRequired,
    products:PropTypes.arrayOf(PropTypes.object).isRequired,
    getProduct:PropTypes.func.isRequired
}
const mapStateToProps=({productState:{products, loading}})=>{
    return{
        loading,
        products
    }
}
// const mapDispatchToProps=(dispatch)=>{
//     return{
//         getProducts: ()=>dispatch(getProduct())
//     }
// }

export default connect(mapStateToProps, {getProduct})(Products);
