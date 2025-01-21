import {Component} from "react";
import User from "./User";
import UserClass from "./UserClass";


class About extends Component{

    constructor(props){
        super(props);

        console.log("Parent Constructor");
    }

    componentDidMount(){
        console.log("Parent componentDidMount");
    }

    render(){

        console.log("Parent Rendering");

        return(
            <div>
            <h1>About</h1>
            <h2>About page using Router Library</h2>
            <UserClass name={"First"} location={"Pune"}/>
            <UserClass name={"Second"} location={"Pune"}/>
        </div>
        )
    }
}

export default About;
