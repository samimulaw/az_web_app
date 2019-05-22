import React from "react";
import rents from '../Rent/rentList.json';

class Housing extends React.Component {
    render() {
        return (
            <div>
                <div className='row pt-3 pb-2 bg-light'>
                    <div className="offset-sm-4">
                    </div>
                    <div className="col-sm-5">
                        <h3>Details</h3>
                    </div>
                    <div className="col-sm-3">
                        <h3>Contacts</h3>
                    </div>
                </div>
                {rents.map( (rent)=> {
                       return( <div className="row align-content-center m-2  border-info py-2 ali">
                            <div className="col-sm-4 align-content-center px-0">
                                <img src={require(`../imgs/${rent.image}`)} width="100%" className='align-content-center'/>
                            </div>
                            <div className="col-sm-5">
                                <div className='text-left'>{rent.description}</div>
                                <div className='text-left'>{rent.posted_on}</div>
                            </div>
                            <div className="col-sm-3">
                                <div className='text-left'>{`Phone: ${rent.phone_number}`}</div>
                                <div className='text-left'>{`Email: ${rent.email}`}</div>
                            </div>
                        </div>
                       );
                    }
                )}
            </div>
        )
    }
}
export default Housing;