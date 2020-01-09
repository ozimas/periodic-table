import React from "react";
import Element from "./Element";
import data from "../backend/data.json";

class TablePeriodic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: data
    };
  }
  render() {
    return (
      <div className="table__periodic">
        <Element id="1" symbol="h" name="wodór" atomicMass="1.05" />
      </div>
    );
  }
}

export default TablePeriodic;
