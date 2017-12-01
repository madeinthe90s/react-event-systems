import React from 'react';

class Todo extends React.Component{
  constructor(){
    super();
    this.state={
      complete: false,
      newInput: "",
      showUpdateField: false
    }
    // manualling bind your functions here
    this.updateInput = this.updateInput.bind(this);
    this.updateProp = this.updateProp.bind(this);
  }


  updateInput(e){
    e.preventDefault()
    this.setState({
      newInput: e.target.value
    })
  }

  updateProp(e){
    e.preventDefault()
    this.props.update([this.props.task, this.state.newInput]);
    this.setState({
      showUpdateField: false
    })
  }
componentWillReceiveProps(nextProps){
  if(nextProps !== this.props){
    this.setState({
      complete: false
    })
  }
}


render(){
  return(

    <div>
      <li>{this.props.task}
        <button onClick={ ()=>this.props.del(this.props.task) }>Delete</button>
       

        
       
        {this.state.showUpdateField ?
          <button onClick={this.updateProp}>Done updating</button> :
          <button onClick={ ()=> this.setState({ showUpdateField: true }) }>
          Update</button>
        }
      </li>

        {/* Here we are showing the input field based on the boolean of showUpdateField */}

        {this.state.showUpdateField ?
          <form onSubmit={ this.updateProp }>
          <input placeholder={this.props.task} onChange={ this.updateInput }/>
          </form>
      
          :
          ""
        }
  
    </div>
    )
  }
}


export default Todo;
