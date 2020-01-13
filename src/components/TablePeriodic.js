import React from "react";
import Element from "./Element";
import ElementEmpty from './ElementEmpty';
import data from "../backend/data.json";

class TablePeriodic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: data
    };
    this.createElements = this.createElements.bind(this);
    this.createElementsEmpty = this.createElementsEmpty.bind(this);
  }
  createElements() {
    return this.state.elements.map((item) => {
      return this.createElement(item);
    })
  }
  createElement(elem) {
    return <Element id={elem.atomic_number} symbol={elem.shortcut} name={elem.name} atomicMass={elem.atom_mass} key={elem.atomic_number}/>
  }
  createElementsEmpty(count){
    let result = [];
    for(let i = 1; i <= count; i++){
      result.push(this.createElementEmpty(i));
    }
    return result;
  }
  createElementEmpty(number){
    return <ElementEmpty num={number} key={number}/>
  }
  render() {
    return (
      <div className="table__periodic">
        { this.createElementsEmpty(8) }
        { this.createElements() }
      </div>
    );
  }
}

export default TablePeriodic;
