import React from "react";
import Element from "./Element";
import data from "../backend/data.json";

class TablePeriodic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: data
    };
    this.createElements = this.createElements.bind(this);
  }
  createElements() {
    return this.state.elements.map((item) => {
      return this.createElement(item);
    })
  }
  createElement(elem) {
    return <Element id={elem.atomic_number} symbol={elem.shortcut} name={elem.name} atomicMass={elem.atom_mass} />
  }
  render() {
    return (
      <div className="table__periodic">
        {this.createElements()}
      </div>
    );
  }
}

export default TablePeriodic;
