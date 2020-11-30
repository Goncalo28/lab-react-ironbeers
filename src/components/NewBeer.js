import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import IronBeersService from '../utils/api';

class NewBeer extends Component {
    state = {
        name: '',
        tagline: '',
        first_brewed: '',
        attenuation_level: 0,
        description: '',
        contributed_by: ''
    }

    handleChange = (e) => {
        let { name, value, type } = e.target;
        if (type === 'number') {
            value = e.target.number;
        }
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        const ironBeersService = new IronBeersService();
        ironBeersService.addBeer(this.state)
            .then(() => {
                this.props.history.push('/')
            })
    }

    render() {
        return (
            <div>
                <header>
                    <Link to='/'>Home</Link>
                </header>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Name</label>
                    <input onChange={this.handleChange} type='text' name='name' value={this.state.name} />

                    <label>Tag Line</label>
                    <input onChange={this.handleChange} type='text' name='tagline' value={this.state.tagline} />

                    <label>First Brewed</label>
                    <input onChange={this.handleChange} type='text' name='first_brewed' value={this.state.first_brewed} />

                    <label>Attenuation Level</label>
                    <input onChange={this.handleChange} type='number' name='attenuation_level' value={this.state.attenuation_level} />

                    <label>Description</label>
                    <input onChange={this.handleChange} type='text' name='description' value={this.state.description} />

                    <label>Contributed By:</label>
                    <input onChange={this.handleChange} type='text' name='contributed_by' value={this.state.contributed_by} />

                    <button>Create</button>
                </form>
            </div>
        )
    }
}

export default withRouter(NewBeer);
