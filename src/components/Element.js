import React from "react";

class Element extends React.Component {
  render() {
    return (
      <div className="element">
        <div className="element__id">{this.props.id}</div>
        <div className="element__sym">{this.props.symbol}</div>
        <div className="element__name">{this.props.name}</div>
        <div className="element__atomic-mass">{this.props.atomicMass}</div>
      </div>
    );
  }
}

export default Element;
