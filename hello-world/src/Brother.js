import React, { Component } from 'react';
class Brother extends Component{
  constructor(props) {
    super(props);
    this.state={ 
      feeling:"?",
      expectAmount: 40
    }
    this.setMyFeeling=this.setMyFeeling.bind(this);
  }

    setMyFeeling(){
        if(this.props.money<40)
            this.setState({feeling:"不能接受"})
        else
            this.setState({feeling:"可以接受"})
        this.props.argue("brother",this.state.expectAmount);
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevProps.money!==this.props.money){
            this.setMyFeeling();
        }
    }

    render(){
        return(<div>我是兒子，我拿到{this.props.money}，我目前{this.state.feeling}</div>);
    }
}
export default Brother;