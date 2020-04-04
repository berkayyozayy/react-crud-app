import React, { Component } from 'react'
import PropTypes from "prop-types";
import UserConsumer from "../context";
import axios from "axios";
import {Link} from "react-router-dom";

class User extends Component {

    state = { 
        isVisible : false
    }

    constructor(props){
        super(props);

        this.onClickEvent = this.onClickEvent.bind(this);
       
    }
    
    onClickEvent = (number, e) => {
        // console.log(this); // Pointing User Object. We connect with bind function
        // console.log(number);

        this.setState({
            isVisible : !this.state.isVisible
        })
    }

    onDeleteUser = async (dispatch,e) => {
        const {id} = this.props;
        //Delete Request
        await axios.delete(`http://localhost:3004/users/${id}`);


        //Consumer Dispatch
        dispatch({type: "DELETE_USER", payload:id});
    }
    componentWillUnmount(){
        console.log("Component Will Unmount");
    }

    render() {
        //Destructing
        const {id,name,department,salary} = this.props;
        const {isVisible} = this.state;

        return(
        <UserConsumer>
            {
                value => {
                    const {dispatch} = value;
                    return (
            <div className = "col mb-2">
                <div className = "card" style={isVisible ? {backgroundColor: "#dcf3f5", color: "light"} : null}>
                    <div className = "card-header d-flex justify-content-between">
                        <h4 className = "d-inline" onClick = {this.onClickEvent.bind(this,27)}>{name}</h4>
                        <i onClick = {this.onDeleteUser.bind(this,dispatch)} className = "far fa-trash-alt" style = {{cursor: "pointer"}}></i>
                    </div>

                    {
                        isVisible ? <div className="card-body">
                        <p className="card-text"> Maas : {salary}</p>
                        <p className="card-text"> Department : {department} </p>
                        <Link to = {`edit/${id}`} className="btn btn-dark btn-block">Update User</Link>
                    </div> : null
                        
                    }
                    
                </div>
               
            </div>
        )
                }
            }

        </UserConsumer>
        )
        
    }
}

// All fields are must be string and required
User.propTypes = {
    name : PropTypes.string.isRequired,
    department : PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired,
    
}
// Default Values are declared
User.defaultProps = {
    name : "Steve Jobs",
    department : "CEO",
    salary : "Limitless"
}


export default User;