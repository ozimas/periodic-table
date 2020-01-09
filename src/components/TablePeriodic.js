import React from "react";
import Element from "./Element";

class TablePeriodic extends React.Component {
  render() {
    return (
      <div className="table__periodic">
        <Element id="1" symbol="h" name="wodór" atomicMass="1.05" />
      </div>
    );
  }
}

export default TablePeriodic;
