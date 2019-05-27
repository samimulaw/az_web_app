import React from "react";
class About extends React.Component {
    render() {
        const { next, category } = this.props;

        return (
            <div className="col-sm-3 col-xs-12 pt-3" style={{backgroundColor: "#33FFF6"}}>
                <span className={`fa ${category.icon} fa-3x`}/>
                <h3 className=''>{category.header}</h3>
                <div>{category.description}</div>
            </div>
        )
    }
}
export default About;