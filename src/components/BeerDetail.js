import React, { Component } from 'react';
import IronBeersService from '../utils/api';

class BeerDetail extends Component {
    state = {
        image: '',
        name: '',
        tagline: '',
        first_brewed: '',
        attenuation_level: '',
        description: '',
        contributed_by: ''
    }

    componentDidMount() {
        const ironBeersService = new IronBeersService();

        //how to get params from queryString /characters?q=123
        // const values = queryString.parse(this.props.location.search)
        // console.log(values)
        //how to get params from the route params
        const id = this.props.match.params.id;
        console.log(id)
        ironBeersService.getBeer(id)
            .then((res) => {
                let beer = res.data
                this.setState({
                    image: beer.image_url,
                    name: beer.name,
                    tagline: beer.tagline,
                    first_brewed: beer.first_brewed,
                    attenuation_level: beer.attenuation_level,
                    description: beer.description,
                    contributed_by: beer.contributed_by
                })
            })
    }

    render() {
        return (
            <div>
                <img style={{ width: '10%' }} src={this.state.image} alt='beer' />
                <h5>{this.state.name}</h5>
                <p>{this.state.tagline}</p>
                <p>{this.state.first_brewed}</p>
                <p>{this.state.attenuation_level}</p>
                <p>{this.state.description}</p>
                <p>{this.state.contributed_by}</p>
            </div>
        )
    }
}

export default BeerDetail;