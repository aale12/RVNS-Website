import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// Actions
import { exampleAction } from '../../actions/exampleActions'

@connect((store) => {
    return {
        example: store.example,
    }
})
class ServicePage extends Component {

    componentDidMount() {
        document.title = "Services - River Oaks Nails & Spa";
    }

    render() {
        if(!this.props.example) {
            // Dispatch action
            this.props.dispatch(exampleAction(true));
        }

        // Alert the store
        console.log(this.props.example);

        return (
            <div>
                <h1>Services Page</h1>
            </div>
        )
    }
}

export default ServicePage;