import React, { Component } from 'react'

class Test extends Component {
    constructor(props){
        super(props)
        this.state = {
            a: 20
        }
        console.log("Constructor");
    }
    componentDidMount = () => {
        console.log("ComponentDidMount");
        this.setState({ //It will be render again. Because our value setting again.
            a: 30
        })
    }
    componentDidUpdate = () => {
        console.log("ComponentDidUpdate");
    }

    render() {
        console.log("Render");
        return (
            <div>
                
            </div>
        )
    }
}


export default Test;