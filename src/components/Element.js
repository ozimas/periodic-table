import React from "react";

class Element extends React.Component {
  render() {
    return (
      <div className="element">
        <div class="element__id">{this.props.id}</div>
        <div class="element__sym">{this.props.symbol}</div>
        <div class="element__name">{this.props.name}</div>
        <div class="element__atomic-mass">{this.props.atomicMass}</div>
      </div>
    );
  }
}

export default Element;
