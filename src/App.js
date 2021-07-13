
import React from 'react';
import './App.css';
import ListItems from './components/TodoItems'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


library.add(faTrash)

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text :'',
        key:''
      }
  
    
 
    }
    this.handleInput = this.handleInput.bind(this)
    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.markComplete=this.markComplete.bind(this)

  }
  //define method
  handleInput(e)
  {
    this.setState({
      currentItem: {
        text: e.target.value,
        key:Date.now()
      }

    })
  }
  
  addItem(e)
  
  {
    e.preventDefault()
    const newItem = this.state.currentItem
    console.log(newItem)
    if (newItem.text !== "")
    {
      const newItems = [...this.state.items, newItem]
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: '',
          completed:''
          
        }
      })
      
    }

  }
  deleteItem(key)
  {
    const filteredItems = this.state.items.filter(item => item.key !== key)
    this.setState({
      items: filteredItems

    })
  }

  markComplete(key)

  {
    /*
    this.setState({
      items: this.items.map(item =>
      {
        if (item.key === key)
        {
        item.completed=!item.completed
        }
        return item;
    }
      )
})
*/
      console.log(key)
    }
    
//render state
 render(){
  return (
    <div className="App">
      <h1>Daily Activities</h1>
      <hr/>
     <form className="to do" onSubmit={this.addItem}> 
       <label>
     
          <input type="text" name="name" placeholder="Type here ......"
            value={this.state.currentItem.text}
            onChange={this.handleInput} />
    </label>
    <button type="submit"> Add</button>
     </form>
      <hr/>
      <ListItems items={this.state.items} markComplete={this.markComplete} deleteItem={ this.deleteItem}/>
      
    </div>
  
  );
 }
}


export default App;
