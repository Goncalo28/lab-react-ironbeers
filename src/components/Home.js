import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <ul>
                <li>
                    <Link to='/beers'>All beers</Link>
                </li>
                <li>
                    <Link to='/beers/random'>Random Beer</Link>
                </li>
                <li>
                    <Link to='/beers/new'>New Beer</Link>
                </li>
            </ul>
        </div>
    )
}

export default Home
