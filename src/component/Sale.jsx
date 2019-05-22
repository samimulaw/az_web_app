import React from "react";
import products from '../Sale/saleProducts';
class Sale extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                {products.map((product)=>{
                   return(
                       <div className='col-md-3 col-sm-3 p-2'>
                           <img src={require(`../imgs/${product.image}`)} width="90%"/>
                           <div>{product.product_name}</div>
                           <div>{product.price}</div>
                           <div>{product.city}</div>
                       </div>);
                    })}
                  </div>
            </div>
        )
    }
}
export default Sale;