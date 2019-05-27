import React from 'react';

export default class Navigation extends React.Component {
    render() {
        return (
            <div className="">
                <nav className="navbar navbar-expand-md navbar-dark " style={{backgroundColor: "#3399FF"}}>
                    <div className='align-content-center offset-3 row'>
                    <a className="navbar-brand pl-3" onClick={() => this.props.next('home')}>Home</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item pl-3" >
                                <a className="nav-link"  onClick={() => this.props.next('housing')}>Housing</a>
                            </li>
                            <li className="nav-item pl-3">
                                <a className="nav-link"  onClick={() => this.props.next('sale')}>Sale</a>
                            </li>
                            <li className="nav-item pl-3">
                                <a className="nav-link" onClick={() => this.props.next('services')} >Services</a>
                            </li>
                            <li className="nav-item pl-3">
                                <a className="nav-link" onClick={() => this.props.next('jobs')}>Jobs</a>
                            </li>
                        </ul>
                    </div>
                  </div>
                </nav>
            < /div>)

    }
  }