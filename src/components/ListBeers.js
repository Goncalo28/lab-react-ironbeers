import React, { Component } from 'react'
import IronBeersService from '../utils/api';
import { Link } from 'react-router-dom'

class ListBeers extends Component {
    state = {
        beers: [],
    }

    componentDidMount() {
        const ironBeersService = new IronBeersService();
        ironBeersService.getAll()
            .then((res) => {
                console.log(res)
                this.setState({
                    beers: res.data
                })
            })
    }

    render() {
        return (
            <div>
                <header>
                    <Link to='/'>Home</Link>
                </header>
                {this.state.beers.map((beer, index) => {
                    return (
                        <div key={index}>
                            <img style={{ width: '10%' }} src={beer.image_url} alt='beer' />
                            <h5>{beer.name}</h5>
                            <p>{beer.tagline}</p>
                            <p>{beer.contributed_by}</p>
                            <Link to={`/beers/${beer._id}`}>Beer Details</Link>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ListBeers;
