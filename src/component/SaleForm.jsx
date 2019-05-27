import React from "react";
class SaleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', catagory:'', file:null};

        this.handleCatagoryChange = this.handleCatagoryChange.bind(this);
        this.handleUploadFile = this.handleUploadFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleCatagoryChange(e) {
        console.log("handleCatagoryChange ****");
        this.setState({ catagory: e.target.value });
    }
    handleUploadFile(e) {
        console.warn("handleUploadFile ****" +JSON.stringify(e.target.files));
        this.setState({file:e.target.files[0]});
    }
    handleSubmit(event) {
        console.log("handleUploadFile ****");
         let files= event.target.files;
        console.log('A name was submitted: ' , files);
    }

    render() {
        return (

            <div onSubmit={this.handleSubmit}>
                <h3>File Upload</h3>
                <input type="file" name="file" onChange= {(e)=>this.handleUploadFile(e)} />
            </div>
         );
    }
}
export default SaleForm;