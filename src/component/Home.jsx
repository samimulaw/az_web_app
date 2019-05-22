import React from "react";
import Catagories from "./Catagories";
import Filter from "./Filter";

class Home extends React.Component {
    render() {
        return (
            <div>
            <div className='row mx-3 '>
            <div className=''>
                <Catagories />
                <Filter />
            </div>
            <div>
            <div className="row">
                    <div className="offset-1 col-3 home bg-secondary border p-md-3 my-4"  onClick={() => this.props.next('housing')}>
                        <span className='fa fa-home fa-4x'/>
                        <h2 className=''>Housing</h2>
                        <div>You can rent, buy and sell apratments, houses, and business stores</div>
                    </div>
                    <div className="offset-1 col-3  bg-secondary border p-md-3 my-4" onClick={() => this.props.next('sale')}>
                        <span className='fa fa-cart-plus fa-4x'/>
                        <h2 className=''>Sale</h2>
                        <div>Buy and sell new and used products you have</div>
                    </div>
                </div>
                <div className="row">
                    <div className="offset-1 col-3 cart bg-secondary border p-md-3 my-4" onClick={() => this.props.next('services')}>
                        <span className='fa fa-handshake-o fa-4x'/>
                        <h2 className=''>Services</h2>
                        <div>Buy and sell new and used products you have</div>
                    </div>
                    <div className="offset-1 col-3 home bg-secondary border p-md-3 my-4" onClick={() => this.props.next('jobs')}>
                        <span className='fa fa-users fa-4x'/>
                        <h2 className=''>Jobs</h2>
                        <div>find opening jobs in your convientien city</div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        )
    }
}

export default Home;