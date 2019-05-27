import React from 'react'
const axios = require("axios");
class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            imagePreviewUrl: ''
        };
        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleSubmit(e) {
        e.preventDefault();
        fetch('sale' , {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then((result) => result.json())
            .then((info) => { console.log(info); })
    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });

            console.log("here is the photo ", file)
        }

        reader.readAsDataURL(file)
    }

    render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} />);
        }

        return (
            <div>
                <form onSubmit={this._handleSubmit}>
                    <input type="file" onChange={this._handleImageChange} />
                    <button type="submit" onClick={this._handleSubmit}>Upload Image</button>
                </form>
                {$imagePreview && <div className="col-sm-3 " > {$imagePreview} </div>}
            </div>
        )
    }

}

export default ImageUpload;

// class ReactUploadImage extends React.Component {
//
//     constructor(props) {
//         super(props);
//         this.state ={
//             file: null
//         };
//         this.onFormSubmit = this.onFormSubmit.bind(this);
//         this.onChange = this.onChange.bind(this);
//     }
//     onFormSubmit(e){
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('myImage',this.state.file);
//         const config = {
//             headers: {
//                 'content-type': 'multipart/form-data'
//             }
//         };
//         axios.post("http://localhost:3001/users",formData,config)
//             .then((response) => {
//                 alert("The file is successfully uploaded");
//             }).catch((error) => {
//         });
//     }
//     onChange(e) {
//         this.setState({file:e.target.files[0]});
//     }
//
//     render() {
//         return (
//             <form onSubmit={this.onFormSubmit}>
//                 <h1>File Upload</h1>
//                 <input type="file" name="myImage" onChange= {this.onChange} />
//                 <button type="submit">Upload</button>
//             </form>
//         )
//     }
// }
//
// export default ReactUploadImage