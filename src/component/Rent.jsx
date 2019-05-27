import React from "react";
class Rent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            displayForm: false,
        }
        this.handleResponse = this.handleResponse.bind(this);
    }
    handleResponse(){

    }
    render() {
        const {rent} = this.props
        return (
             <div className="row align-items-center border-info mx-0 py-2 border mb-2">
                <div className='col-6 text-left'>
                    <h4 className=''>{rent.title}</h4>
                    <span className='fa fa-map-marker border-bottom-1'><span className="pl-2">{rent.address}</span></span>
                    <p>{rent.description}</p>
                </div>
                <div className='col-3'>
                    <img src={require(`../imgs/${rent.image}`)} width="100%"  height="150"className='align-content-center'/>
                </div>
                <div className='col-3'>
                    <h4>600</h4>
                    <p>/month</p>
                    <button className='btn btn-primary px-0 col-6' onClick={() => this.props.next('respond')}>Respond</button>
                </div>
             </div>)
    }
}
export default Rent;