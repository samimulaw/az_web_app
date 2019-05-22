import React from 'react';
import Navigation from './Navigation'
import Housing from './Housing'
import Sale from './Sale'
import Jobs from "./Jobs";
import Services from "./Services";
import Home from "./Home";

class MainContainer extends React.Component {
    constructor(props){
        super(props);
        this.state={
            step: 'home'
        }
        this.next = this.next.bind(this);
    }
    const

    next(nextStep) {
        console.log('this is being called ' + nextStep);
        this.setState({step: nextStep})
    }

    render() {
    const { step }= this.state;
        console.log('this is inside render ' + step);
    let content= "";
    switch (step) {
        case 'home':
            content = (<Home next={this.next}/>);
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
    }

    return (
            <div>
                <Navigation next={this.next}/>
                {content}
            </div>
        );
    }
}

export default MainContainer;
