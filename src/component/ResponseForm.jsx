import React from "react";
class ResponseForm extends React.Component {
    render() {
        return (
            <div className='py-3'>
                <form className='offset-3 col-md-6 bg-white py-3'>
                        <div className="form-group col-md-6 px-0 text-left">
                            <label htmlFor="fullName">Your Name</label>
                            <input type="text" className="form-control" id="fullName" placeholder="Full Name"/>
                        </div>
                        <div className="form-group col-md-6 px-0 text-left">
                            <label htmlFor="inputEmail4">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                        </div>
                    <div className="form-row mx-0 col-md-12 px-0">
                        <div className="form-group col-md-3 px-0 pr-3 text-left">
                            <label htmlFor="inputState">State</label>
                            <select id="inputState" className="form-control">
                                <option selected>Eth(+251)</option>
                                <option>US(+1)</option>
                            </select>
                        </div>
                        <div className="form-group col-md-5 px-0 text-left">
                            <label htmlFor="inputCity">Phone</label>
                            <input type="text" className="form-control" id="inputCity" placeholder="10 digit number"/>
                        </div>
                    </div>
                    <div className="form-group col-md-8 px-0 text-left">
                        <label htmlFor="exampleFormControlTextarea1">Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className=''>
                    <button type="submit" className="btn btn-primary align-items-center">Send Response</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default ResponseForm;