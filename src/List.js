import React from "react";
import Grocery from "./Grocery";

const List = ({ name, items, groceryClick }) => (
  <div>
   
    {/* <div class = "ui inverted segment">
      <div role='list' class='ui inverted list'>
        <div role='listitem' class='item'>
          
        </div>
      </div>
    </div> */}
 
      <div role='list' class='ui list'>
        <div role='listitem' class='item'>
          <div class='content'>
            <h2>{ name }</h2>
            { items.map( item => <Grocery key={item.id} {...item} groceryClick={groceryClick}/>) }
            <br/>
          </div>
        </div>
      </div>
    </div>
); 

export default List;
