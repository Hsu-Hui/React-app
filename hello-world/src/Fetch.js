import React, { Component } from "react";

class Fetch extends Component{
    constructor(props){
        super(props);
        this.state={
            repoName:null
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        fetch("https://api.github.com/users/Hsu-Hui/repos",{
            method:"GET"
        })
        .then(res => res.json())
        .then(data =>{
            //After get request data do something.
            this.setState({repoName: data[0]['name']});
        })
        .catch(e =>{
            console.log(e); 
        })
    }

    render(){
        return(
            <div className="App">
                <div className="data-display">
                    {(this.state.repoName===null)?"目前還有沒有資料":this.state.repoName}
                    </div>
                    <button onClick={this.handleClick}>Get the first repo of Ryan sorted in alphabet. </button>
                </div>
        )
    }
}

export default Fetch;