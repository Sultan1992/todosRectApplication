
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

function ListItems(props)
{

  
  const items = props.items;
  const ListItems = items.map(item =>
  {
    return (
      <div className="lists" key={item.key}>
        <p>
        <input type="checkbox" className="checkbox" onChange={ ()=>props.markComplete()}/>{''}
      
            {item.text} {''}
          
          
          <span>
          <FontAwesomeIcon className="fa icons" icon="trash"
          onClick={()=>props.deleteItem(item.key)}
        
          />
          </span>
        
        </p>
       

      </div>
    )
  })

    return (
      <div >
      <FlipMove duration ={500} easing="ease-in-out">
    {ListItems}
    </FlipMove>
      </div>
    )
  
  }



  export default ListItems;