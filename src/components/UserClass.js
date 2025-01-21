import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            count:0,
            // You can add Multiple state variables sperated by ','
        };
        console.log(this.props.name+ "Child Constructor");
    };

    componentDidMount(){
        console.log(this.props.name+"Child componentDidMount");
    }

    render(){

        const { name, location} = this.props;
        const {count} =this.state;

        console.log(this.props.name+"Child Rendering");

        return(
        <div className="user-card">
        <h2>Count:{count}</h2>
        <button onClick={() => {
                this.setState({ count: this.state.count+1, }) 
                }}> Increase Count
        </button>
        <h2> Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact: @dhanashree_d</h4>
        </div>
        );
    };
}

export default UserClass;