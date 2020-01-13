import React from "react";
import "./ElementEmpty.scss"

class ElementEmpty extends React.Component {
    render() {
        return (<div className={`element__empty empty--${this.props.num}`}></div>);
    }
}

export default ElementEmpty;