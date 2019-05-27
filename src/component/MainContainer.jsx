import React from 'react';
import Navigation from './Navigation'
import Housing from './Housing'
import Sale from './Sale'
import Jobs from "./Jobs";
import Services from "./Services";
import Home from "./Home";
import ResponseForm from "./ResponseForm";

class MainContainer extends React.Component {
    constructor(props){
        super(props);
        this.state={
            step: 'home',
            sales: []
        }
        this.next = this.next.bind(this);
    }

    next(nextStep) {
        console.log('this is being called ' + nextStep);
        this.setState({step: nextStep})
    }

    componentDidMount() {
        fetch('/users').then(res=> res)
            .then(res=>this.setState({sales:res }))
    }

    render() {
    const { step, sales }= this.state;
        console.log('this is inside render ' + step);
    let content= "";
    switch (step) {
        case 'home':
            content = (<Home next={this.next} sales = {sales}/>);
            break;
        case 'housing':
            content = (<Housing />);
            break;
        case 'sale':
            content = (<Sale />);
            break;
        case 'services':
            content = (<Services />);
            break;
        case 'jobs':
            content = (<Jobs />);
            break;
        case 'respond':
            content = (<ResponseForm />);

    }

    return (
            <div className=''>
            <div className='offset-1 col-10'>
                <Navigation next={this.next}/>
                {content}
            </div>
            </div>
        );
    }
}

export default MainContainer;
