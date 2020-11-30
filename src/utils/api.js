import axios from "axios";

class IronBeersService {
    constructor() {
        let service = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
        });
        this.service = service;
    }

    getAll() {
        return this.service.get('/');
    }

    getBeer(id) {
        return this.service.get(`/${id}`);
    }

    getRandomBeer() {
        return this.service.get('/random')
    }

    addBeer(beer) {
        return this.service.post('/new', beer);
    }
}

export default IronBeersService;
