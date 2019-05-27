import React from "react";
import About from './About';
import products from "../Sale/saleProducts";
import rents from '../Rent/rentList';
import Rent from './Rent';

class Home extends React.Component {

    render() {
        const { sales }= this.props;
        console.log("here is the sale "+ JSON.stringify(sales));
        const categories = [
            {header:"Housing",  description:"You can rent, house and auto", icon: "fa-home"},
            {header:"Sell", description:"Buy and sell new and used products ", icon:"fa-cart-plus "},
            {header:"Services", description:"Advertise or visit services in your area", icon: "fa-handshake-o "},
            {header:"Jobs", description:"find opening jobs in your nearest city", icon: "fa-users"}
        ]
        return (
            <div>
            <div className="row mx-0">
                {categories.map((category=>{
                return (<About category={category}/>)
                 }))}
            </div>
            <div className="row mt-3">
                {products.map((product)=>{
                    return(
                        <div className='col-sm-4 col-lg-3 pb-2'>
                            <div className='bg-info border'>
                            <img src={require(`../imgs/${product.image}`)} height="250" width="100%"/>
                            <div>{product.product_name}</div>
                            <div>{product.price}</div>
                            <div>{product.city}</div>
                            </div>
                        </div>);
                })}
            </div>
            <div className="my-3">
                {rents.map((rent)=>{
                   return(
                      <Rent rent = { rent } {...this.props}/>);
                    })}
                </div>
            {/*<ImageUpload/>*/}
            </div>
        )
    }
}

export default Home;