import React, { Component } from 'react'
import IronBeersService from '../utils/api';
import { Link } from 'react-router-dom'

class RandomBeer extends Component {
    state = {
        image_url: '',
        name: '',
        tagline: '',
        first_brewed: '',
        attenuation_level: '',
        description: '',
        contributed_by: '',
    }

    componentDidMount() {
        const ironBeersService = new IronBeersService();
        ironBeersService.getRandomBeer()
            .then((res) => {
                let { image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by } = res.data
                this.setState({
                    image_url,
                    name,
                    tagline,
                    first_brewed,
                    attenuation_level,
                    description,
                    contributed_by
                })
            })
    }

    render() {
        return (
            <div>
                <header>
                    <Link to='/'>Home</Link>
                </header>

                <div>
                    <img style={{ width: '10%' }} src={this.state.image_url} alt='randomBeer' />
                    <h5>{this.state.name}</h5>
                    <p>{this.state.tagline}</p>
                    <p>{this.state.first_brewed}</p>
                    <p>{this.state.attenuation_level}</p>
                    <p>{this.state.description}</p>
                    <p>{this.state.contributed_by}</p>
                </div>
            </div>
        )
    }
}

export default RandomBeer;
