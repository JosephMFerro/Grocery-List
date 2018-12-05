import React from "react";
import { Checkbox } from 'semantic-ui-react';

const Grocery = ({ name, id, complete, groceryClick }) => (
  <li 
    onClick = {() => groceryClick(id)}
    style = {complete ? {...styles.grocery, ...styles.complete} : styles.grocery }>
    <Checkbox label={ name } />
  </li>
)

const styles = {
  complete: {color: "green", textDecoration: "line-through"},
}

// const CheckboxExampleCheckbox = () => <Checkbox label='Make my profile visible' />


export default Grocery;